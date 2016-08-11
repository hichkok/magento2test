<?php 
if(isset($_POST['submit'])){
  if(strlen(trim($_REQUEST['email'])) != 0 && strlen(trim($_REQUEST['name'])) != 0){
    $to = "sales@pandp-ind.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    //$name = $_POST['name'];
   // $company = $_POST['company'];
    $subject = "New company!";
    $subject2 = "Thank you - Stay Tuned !";
    $message = "From: ".$from."\n\nName: ";
    $message2 = "Thank you for your interest!\n\nWe will let you know when we launch!\n\nQeve Team.";

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "<div style='text-align: center; padding: 10px 0; position: absolute; top: 2px; left: 0; right: 0; z-index: 20;'>Thank you for your interest! We will let you know when we launch!</div>";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
  } else {
    echo "<div style='text-align: center; padding: 10px 0; position: absolute; top: 2px; left: 0; right: 0; z-index: 20;'>Please provide contact information.</div>";
  }
}
?>

<!DOCTYPE HTML>

<html>
	<head>
		<title>P&P designs</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="css/ie/html5shiv.js"></script><![endif]-->
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.dropotron.min.js"></script>
		<script src="js/jquery.scrollgress.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-layers.min.js"></script>
		<script src="js/init.js"></script>
        
        
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-wide.css" />
		</noscript>
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
	</head>
	<body class="landing">

		<!-- Header -->
			<header id="header" class="alt">
				<h1><a href="index.html">P&P designs</a></h1>
				<nav id="nav">
					<ul>
						<li><a class="butt3">Home</a></li>
						<li><a class="icon fa-angle-down butt1">Demos</a>
						<ul>
                        	<li ><a class="butt1">Countries</a></li>
							<li><a class="butt1">Vehicle show room</a></li>
							<li><a class="butt2">Mobile store</a></li>
                        	<li><a class="butt2">Integrated</a></li>
						</ul>
						</li>
                        <li><a class="butt5">Contacts</a></li>
						
					</ul>
				</nav>
               
			</header>

		<!-- Banner -->
			<section id="banner">
				<h2>P&P designs</h2>
				<p>Creating innovative 3D websites for businesses</p>
				<ul class="actions">
					<li><a class="button butt1">Demos</a></li>
					<li><a class="button butt4">Learn More</a></li>
                    <li><a class="button butt5">Contact Us</a></li>
				</ul>
			</section>

		<!-- Main -->
			<section id="main" class="container">
		
				<section class="box special">
					<header class="major">
						<h2>Shaping the future of the Web</h2>
						<p>Our company develops impressive 3D websites which main purpose is to help our clients to fully demonstrate capabilities of their products to the customers</p>
					</header>
					<span class="image featured"><img src="images/mas.jpg" alt="" /></span>
				</section>
						
				<section class="box special features">
					<div class="features-row" id="decript">
                        <section>
							<span class="icon major fa-star-o accent2"></span>
							<h3>Attractiveness</h3>
							<p>3D websites' attractiveness generates higher visitors' return to your website and creates word-of-mouth promotion. </p>
						</section>
						<section>
							<span class="icon major fa-paper-plane accent3"></span>
							<h3>Our mission</h3>
							<p>We aim to radically change the way companies present themselves in the Web.</p>
						</section>
					</div>
					<div class="features-row">
						<section>
							<span class="icon major fa-tachometer accent4"></span>
							<h3>Qualities</h3>
							<p>We develop interactive, fast, lightweighted, highest-quality websites.</p>
								
						</section>
						<section>
							<span class="icon major fa-info accent5"></span>
							<h3>When to use 3D?</h3>
							<p>Your company wants to promote its products and you need to demonstrate all its features to the customers.</br>
                        The best way to present your company in the Web.</p>
						</section>
					</div>
				</section>
					
				<div id="first_row" class="row">
					<div class="6u 12u(2)">

						<section class="box special">
							<span class="image featured"><img src="images/lang.jpg" alt="" /></span>
							<h3>Countries</h3>
							<ul class="actions">
								<li><a href="language/" class="button alt">Have a look</a></li>
							</ul>
						</section>
						
					</div>
					<div class="6u 12u(2)">

						<section class="box special">
							<span class="image featured"><img src="images/carvis.jpg" alt="" /></span>
							<h3>Vehicle showroom</h3>
							<ul class="actions">
								<li><a href="carvis/" class="button alt">Have a look</a></li>
							</ul>
						</section>
                        
                        

					</div>
				</div>
    			<div id="second_row" class="row">
					<div class="6u 12u(2)">

						<section class="box special">
							<span class="image featured"><img src="images/webmobile.jpg" alt="" /></span>
							<h3>Mobile store</h3>    
							<ul class="actions">
								<li><a href="webmobile/" class="button alt">Have a look</a></li>
							</ul>
						</section>
						
					</div>
					<div class="6u 12u(2)">

						<section class="box special">
							<span class="image featured"><img src="images/mobile.jpg" alt="" /></span>
							<h3>Integrated</h3>
							<ul class="actions">
								<li><a href="mobile/" class="button alt">Have a look</a></li>
							</ul>
						</section>
                        
                        

					</div>
				</div>

			</section>
			
		<!-- CTA -->
			<section id="cta">
				
				<h2>Leave your contacts</h2>
				<p>Please leave your email adress and we will contact you during the next business day</p>
				
				<form>
					<div class="row uniform 50%">
						<div class="8u 12u(3)">
							<input type="email" name="email" id="email" placeholder="Email Address" />
						</div>
						<div class="4u 12u(3)">
							<input type="submit" value="Contact me!" class="fit" />
						</div>
					</div>
				</form>
				
			</section>
			
		<!-- Footer -->
			<footer id="footer">
                
				<div class="copyright">
                    <h4>Phone: +375 29 925 000 1</br>
                    Email: paul.kechko@pandp-ind.com</br>
                    Skype: paul.kechko</br></br></h4>
					P&P industries. All rights reserved. &copy; 2014
				</div>
			</footer>
 <script>
        $(".butt1").click(function() {
    $('html, body').animate({
        scrollTop: $("#first_row").offset().top
    }, 1000);
});
        $(".butt2").click(function() {
    $('html, body').animate({
        scrollTop: $("#second_row").offset().top
    }, 1000);
});        $(".butt3").click(function() {
    $('html, body').animate({
        scrollTop: $("#banner").offset().top
    }, 1000);
});
     $(".butt4").click(function() {
    $('html, body').animate({
        scrollTop: $("#decript").offset().top
    }, 1000);
});
       $(".butt5").click(function() {
    $('html, body').animate({
        scrollTop: $("#cta").offset().top
    }, 1000);
});
        </script>
	</body>
</html>

