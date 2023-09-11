<!-- 
give following id to element you want to attact this form to 
id="openPopup"
and make sure the follwoing script is being executed 

	<script>
		document.getElementById('openPopup').addEventListener('click', function() {
			document.getElementById('popup').style.display = 'block';
		});

		document.querySelector('.close').addEventListener('click', function() {
			document.getElementById('popup').style.display = 'none';
		});
	</script>
 -->

<section>
    <style>
        .popup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .popup-content {
            background-color: #fff;
            width: 600px;
            padding: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        .close:hover {
            color: #000;
        }

        button {
            padding: 10px 20px;
        }

        form {
            margin-top: 20px;
        }
    </style>

    <div id="popup" class="popup" style="z-index: 2147483647;">
        <div class="popup-content">
            <span class="close">&times;</span>
            <h2>Popup Form</h2>
            <div class="sa-contact-inner-form">
                <form action="https://html.themexriver.com/Saasio/contact.php">
                    <div class="row">
                        <div class="col-12">
                            <input type="text" name="name" placeholder="Your Full Name">
                        </div>
                        <div class="col-12">
                            <input type="email" name="email" placeholder="Your Email Address">
                        </div>
                        <div class="col-12">
                            <input type="text" name="phone" placeholder="Your Mobile Number">
                        </div>
                        <div class="col-12">
                            <input type="text" name="subject" placeholder="Your Subject">
                        </div>
                        <div class="col-12">
                            <textarea name="message" placeholder="Your Valuable Word"></textarea>
                        </div>
                        <div class="sa-contact-inner-btn text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</section>