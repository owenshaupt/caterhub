// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .

/* below are working axios http requests! */

/*
  axios({
    method: 'delete',
    url: '/api/session'
  }).then(res => {
      console.log(res.data);
    }).catch(res => {
    console.log(res.response.data);
  })
*/

/*
  axios({
    method: 'post',
    url: '/api/session',
    data: {
      email: '123@123.123,
      password: '123123'
    }
  }).then(res => {
      console.log(res.data);
    }).catch(res => {
    console.log(res.response.data);
  })
*/