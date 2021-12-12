resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'

loadscreen  'html/index.html'
loadscreen_cursor 'yes'



files {
    'html/index.html',
    'html/js/main.js',
    'html/css/main.css',
    'html/js/jquery-3.5.1.min.js',
    'html/img/*.png',
    'html/music/song.mp3'
}

server_script 'server.lua'
