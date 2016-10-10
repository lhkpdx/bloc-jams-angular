(function() {
     function SongPlayer() {
            /** 
            * @desc Album object for SongPlayer service
            * @type {Object}
            */
            var SongPlayer = {};
            
            /** 
            * @desc Album object for current song
            * @type {Object}
            */
            var currentSong = null; //Private Attribute
            
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
            * @function setSong
            * @desc Stops currently playing song and loads new audio file as currentBuzzObject
            * @param {Object} song
            */
            var setSong = function(song) {  //Private Function
                if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
 
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            currentSong = song;
            };
         
            /**  
            * @function SongPlayer.play
            * @desc Plays the song after checking on/switching to user's choice
            * @param {Object} song
            */
            SongPlayer.play = function(song) {  //Public Function
                if (currentSong !== song) {
                    setSong(song);
                    playSong(song);
                } else if (currentSong === song) {
                    if (currentBuzzObject.isPaused()) {
                       // currentBuzzObject.play();
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
                currentBuzzObject.pause();
                song.playing = false;
            };
         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
