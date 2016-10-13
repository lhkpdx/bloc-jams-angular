(function() {
     function SongPlayer(Fixtures) {
            /** 
            * @desc Album object for SongPlayer service
            * @type {Object}
            */
            var SongPlayer = {};
            /** 
            * @function getAlbum
            * @desc Retrieves album from collection
            */
            var currentAlbum = Fixtures.getAlbum();  //Private attribute
            
            /** 
            * @desc Buzz object audio file
            * @type {Object}
            */
            var currentBuzzObject = null;  //Private Attribute
                     
            /**  
            * @function playSong
            * @desc Plays the song 
            * @param {Object} song
            */
            var playSong = function(song) {
                currentBuzzObject.play();
                song.playing = true;
            };
         
               /**  
            * @function stopSong
            * @desc Stops the song 
            * @param {Object} song
            */  
            var stopSong = function(song) {
                currentBuzzObject.stop();
                song.playing = null;
            }
                   
            /**  
            * @function setSong
            * @desc Stops currently playing song and loads new audio file as currentBuzzObject
            * @param {Object} song
            */
            var setSong = function(song) {  //Private Function
                if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    SongPlayer.currentSong.playing = null;
                 
                }
                    currentBuzzObject = new buzz.sound(song.audioUrl, {
                        formats: ['mp3'],
                        preload: true
                    });
 
                SongPlayer.currentSong = song;
            };
         
            /**  
            * @function getSongIndex
            * @desc Returns index of current song
            * @param {Object} index of current song
            */
            var getSongIndex = function(song) {  //Private Function
                return currentAlbum.songs.indexOf(song);
            };
         
            /** 
            * @desc Active song object from list of songs
            * @type {Object}
            */
            SongPlayer.currentSong = null; //Public Attribute
         
            /**
             * @desc Current playback time (in seconds) of currently playing song
             * @type {Number}
             */
             SongPlayer.currentTime = null;

            
            /**  
            * @function SongPlayer.play
            * @desc Plays the song after checking on/switching to user's choice
            * @param {Object} song
            */
            SongPlayer.play = function(song) {  //Public Function
                song = song || SongPlayer.currentSong;
                if (SongPlayer.currentSong !== song) {
                    setSong(song);
                    playSong(song);
                } else if (SongPlayer.currentSong === song) {
                    if (currentBuzzObject.isPaused()) {
                        playSong(song);
                    }  
                }
            };
            
            /**  
            * @function SongPlayer.pause
            * @desc Pauses the song and resets playing status
            * @param {Object} song
            */
            SongPlayer.pause = function(song) {  //Public Function
                song = song || SongPlayer.currentSong;
                currentBuzzObject.pause();
                song.playing = false;
               
            };
         
            /**  
            * @function SongPlayer.previous
            * @desc Retrieves the index for the previous song and plays it
            */
            SongPlayer.previous = function() {
               // song = song || SongPlayer.currentSong;
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex--;
                    if (currentSongIndex < 0) {
                        stopSong(SongPlayer.currentSong);
                    } else {
                        var song = currentAlbum.songs[currentSongIndex];
                        setSong(song);
                        playSong(song);
                    }              
            };
         
            /**  
            * @function SongPlayer.next
            * @desc Retrieves the index for the next song and plays it
            */
            SongPlayer.next = function() {
               // song = song || SongPlayer.currentSong;
               var currentSongIndex = getSongIndex(SongPlayer.currentSong);
               currentSongIndex++;
                 if(currentSongIndex < 0) {
                    stopSong(SongPlayer.currentSong);
                 } else {
                     var song = currentAlbum.songs[currentSongIndex];
                     setSong(song);
                     playSong(song);
                 }
             };
                 
        return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
