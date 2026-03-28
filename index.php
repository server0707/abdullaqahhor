<?php
// Simple PHP server for serving the website
// Usage: php -S localhost:8000

// Load JSON data if requested
if (isset($_GET['data'])) {
    header('Content-Type: application/json');
    $dataFile = 'data/data.json';
    if (file_exists($dataFile)) {
        echo file_get_contents($dataFile);
    } else {
        echo json_encode(['error' => 'Data file not found']);
    }
    exit;
}

// Serve index.html by default
$file = isset($_GET['page']) ? htmlspecialchars($_GET['page']) : 'index.html';
$filepath = realpath($file);

// Security: prevent directory traversal
if ($filepath === false || strpos($filepath, realpath('.')) !== 0) {
    http_response_code(404);
    echo "404 Not Found";
    exit;
}

// Serve the file
if (file_exists($filepath)) {
    // Set appropriate content type
    $mimetype = 'application/octet-stream'; // default
    
    // Try using finfo if available
    if (function_exists('finfo_open')) {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimetype = finfo_file($finfo, $filepath);
        finfo_close($finfo);
    } else {
        // Fallback: detect MIME type by extension
        $extension = strtolower(pathinfo($filepath, PATHINFO_EXTENSION));
        $mimeTypes = [
            'html' => 'text/html',
            'css' => 'text/css',
            'js' => 'application/javascript',
            'json' => 'application/json',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'xml' => 'application/xml',
            'pdf' => 'application/pdf',
            'txt' => 'text/plain'
        ];
        $mimetype = $mimeTypes[$extension] ?? 'application/octet-stream';
    }
    
    header('Content-Type: ' . $mimetype);
    header('Cache-Control: public, max-age=3600');
    readfile($filepath);
} else {
    http_response_code(404);
    include 'index.html';
}
?>
