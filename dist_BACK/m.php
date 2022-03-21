    <?php
    require_once 'lib/swift_required.php';
    //require_once('vendor/autoload.php');

    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE); //convert JSON into array


    if(count($input) > 0){
        $sender = $input['name'];
        $platform = $input['platform'];
        $sender_mail = $input['email'];
        $subject = 'New message from DSFF';
        $message_post = $input['message'];

        $message_body = 'Name: ' . $sender . "\r\n";
        $message_body .= 'Email: ' . $sender_mail . "\r\n";

        $platform_text = 'Script Corner';

        if($platform == 'rought_cut'){
            $platform_text = 'Rough Cut Corner';
        }

        $message_body .= 'Platform: ' . $platform_text . "\r\n";

        $message_body .= '--------------------' . "\r\n";
        $message_body .= 'Message: ' . "\r\n";
        $message_body .= '--------------------' . "\r\n";

        $message_body .= $message_post . "\r\n";


        $transport = Swift_MailTransport::newInstance();

        // Create the Mailer using your created Transport
        $mailer = Swift_Mailer::newInstance($transport);

        // Create the message
        $message = Swift_Message::newInstance($transport)

        // Give the message a subject
        ->setSubject($subject)

        // Set the From address with an associative array
        ->setFrom(array('consulting@drimshortfestival.mk' => $sender))

        // Set the To addresses with an associative array
        ->setTo(array('consulting@drimshortfestival.mk'))
        ->setReplyTo($sender_mail)

        // Give it a body
        ->setBody($message_body);

        $numSent = $mailer->send($message);

        $return_arr[] = array(
                        "status" => true
                    );

        // Encoding array in JSON format
        echo json_encode($return_arr);
    }else{
        $return_arr[] = array(
                        "status" => false
                    );
        echo json_encode($return_arr);
    }

    // And optionally an alternative body
    //->addPart('<q>Here is the message itself</q>', 'text/html')

    // Optionally add any attachments
    //->attach(Swift_Attachment::fromPath('my-document.pdf'))


    /*$transport = Swift_MailTransport::newInstance();

    $message = Swift_Message::newInstance();
    $message->setTo(array(
    "dedurac@gmail.com" => "Profi Dinamik"
    ));

    $message->setSubject("Contact Mail from Profi-Dinamik.com");
    $message->setBody($message_post);
    $message->setFrom($sender_mail, $sender);

    $mailer = Swift_Mailer::newInstance($transport);
    $mailer->send($message);*/
