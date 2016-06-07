'use strict';

$(document).ready(function() {

var c = document.getElementById('c-note');
var d = document.getElementById('d-note');
var e = document.getElementById('e-note');
var f = document.getElementById('f-note');
var g = document.getElementById('g-note');
var a = document.getElementById('a-note');
var b = document.getElementById('b-note');

$('#c').mousedown(function() {
  c.currentTime = 0;
  c.play();
});

$('#d').mousedown(function() {
  d.currentTime = 0;
  d.play();
});

$('#e').mousedown(function() {
  e.currentTime = 0;
  e.play();
});

$('#f').mousedown(function() {
  f.currentTime = 0;
  f.play();
});

$('#g').mousedown(function() {
  g.currentTime = 0;
  g.play();
});

$('#a').mousedown(function() {
  a.currentTime = 0;
  a.play();
});

$('#b').mousedown(function() {
  b.currentTime = 0;
  b.play();
});






});
