/* Discover Salone - shared behaviour
   1. Mobile menu toggle
   2. Form validation (all forms with the data-validate attribute) */

(function () {
  'use strict';

  /* 1. Mobile menu ---------------------------------------- */
  var button = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');

  if (button && nav) {
    button.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Close' : 'Menu';
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'Menu';
        button.focus();
      }
    });
  }

  /* 2. Form validation ------------------------------------ */
  function messageFor(field) {
    var value = field.value.trim();
    if (field.required && value === '') {
      return 'Please fill in this field.';
    }
    if (field.dataset.kind === 'contact' && value !== '') {
      var isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      var isPhone = /^[+()\d\s-]{7,}$/.test(value);
      if (!isEmail && !isPhone) {
        return 'Enter an email address or a phone number.';
      }
    }
    if (field.minLength > 0 && value !== '' && value.length < field.minLength) {
      return 'Please write at least ' + field.minLength + ' characters.';
    }
    return '';
  }

  function showError(field, text) {
    var holder = document.getElementById(field.id + '-error');
    if (holder) { holder.textContent = text; }
    field.setAttribute('aria-invalid', text ? 'true' : 'false');
  }

  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var fields = form.querySelectorAll('input[required], textarea[required], select[required]');

    fields.forEach(function (field) {
      field.addEventListener('blur', function () { showError(field, messageFor(field)); });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') { showError(field, messageFor(field)); }
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var firstBad = null;
      fields.forEach(function (field) {
        var text = messageFor(field);
        showError(field, text);
        if (text && !firstBad) { firstBad = field; }
      });
      if (firstBad) {
        if (status) { status.hidden = true; }
        firstBad.focus();
        return;
      }
      /* There is no server in this student project, so we show a
         confirmation message instead of sending the data. */
      if (status) {
        status.textContent = form.dataset.success || 'Thank you. Your message was received.';
        status.hidden = false;
      }
      form.reset();
    });
  });

  /* Pre-fill the contact form from the page address, for example
     contact.html?topic=Trip%20enquiry&about=Peninsula%20day%20tour */
  var params = new URLSearchParams(window.location.search);
  var topic = document.getElementById('topic');
  var message = document.getElementById('message');
  if (topic && params.get('topic')) { topic.value = params.get('topic'); }
  if (message && params.get('about')) {
    message.value = 'I would like to ask about: ' + params.get('about') + '.\n';
  }
})();
