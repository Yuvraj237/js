<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Preloader Example</title>
<style>
  /* Styles for preloader */
  .preloader {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1000;
  }
  .preloader img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
</head>
<body>
<!-- Preloader markup -->
<div class="preloader" id="preloader">
  <img src="loading-spinner.gif" alt="Loading Spinner">
</div>

<!-- Content that will be loaded asynchronously -->
<div id="content" style="display:none;">
  ok tested
</div>

<script>
  // Display preloader while content is being loaded
  document.getElementById('preloader').style.display = 'block';

  // Simulate asynchronous content loading
  setTimeout(function() {
    document.getElementById('content').style.display = 'block';
    document.getElementById('preloader').style.display = 'none';
  }, 3000); // Simulated loading time (3 seconds)
</script>
</body>
</html>
