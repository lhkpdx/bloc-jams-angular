(function() {
    function AlbumCtrl() {
        this.title ='The Colors',
        this.artist = 'Pablo Picasso',
        this.label = 'Cubism',
        this.year = '1881',
        this.albumArtUrl = '/assets/images/album_covers/02.png',
        this.songs = [
         { number: '1', title: 'Blue', duration: '4:26', audioUrl: 'assets/music/blue' },
         { number: '2', title: 'Green', duration: '3:14', audioUrl: 'assets/music/green' },
         { number: '3', title: 'Red', duration: '5:01', audioUrl: 'assets/music/red' },
         { number: '4', title: 'Pink', duration: '3:21', audioUrl: 'assets/music/pink' },
         { number: '5', title: 'Magenta', duration: '2:15', audioUrl: 'assets/music/magenta' } 
        ];
 };
       
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
