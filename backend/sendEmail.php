<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once './vendor/autoload.php';

$mail = new PHPMailer(true);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    echo json_encode(["message" => "ok"]);
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'));
    if ($data !== null) {
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.hostinger.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'web@fpbsolar.com';
            $mail->Password = 'FpbSolarWeb_23';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;

            $mail->setFrom('web@fpbsolar.com', 'FPBSolar');
            $mail->addAddress('info@fpbsolar.com');

            $mail->Subject = "{$data->first_name} {$data->last_name} quiere contactarse con nosotros!";
            $mail->isHTML(true);

            $mail->Body =
            "<html style='font-family:Verdana, Geneva, Tahoma, sans-serif; color: #1a3240;'>
                <table style='width: 70vw; border: 1px solid #2162A6; font-size: 18px;'>
                    <thead style='background-color: #2162A6;'>
                        <th style='font-size: 24px; color: #fff; padding: 1.2vw;'><strong>{$data->first_name}</strong> quiere contactarse con FPB solar!</th>
                    </thead>
                </table>
                <table style='color: #1a3240; padding-left: 2vw; width: 70vw; border: 1px solid #2162A6; font-size: 18px;'>
                    <thead>
                        <h3>Sus datos personales:</h3>
                    </thead>
                    <tbody style='font-size: 16px; padding-left: 2vw;'>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                                <span>
                                    <strong>Nombre:</strong>
                                    {$data->first_name}
                                </span>
                            </td>
                        </tr>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                                <span>
                                    <strong>Apellido:</strong>
                                    {$data->last_name}
                                </span>
                            </td>
                        </tr>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                                <span>
                                    <strong>Email:</strong>
                                    {$data->email}
                                </span>
                            </td>
                        </tr>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                                <span>
                                    <strong>Telefono:</strong>
                                    {$data->phone}
                                </span>
                            </td>
                        </tr>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                                <span>
                                    <strong>Código postal:</strong>
                                    {$data->cp}
                                </span>
                            </td>
                        </tr>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                                <span>
                                    <strong>Población:</strong>
                                    {$data->population}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style='padding-left: 2vw; width: 70vw; border: 1px solid #2162A6; font-size: 18px; color: #1a3240;'>
                    <thead>
                        <h3>Sobre su estudio:</h3>
                    </thead>
                    <tbody style='font-size: 16px; padding-bottom: 1vw;'>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                                <strong>Tipo de espacio:</strong> {$data->installation_type}
                            </td>
                        </tr>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                            <strong>Lugar:</strong> {$data->place}
                            </td>
                        </tr>
                        <tr style='padding: 0 1.2vw;'>
                            <td style='padding-left: 1vw;'>
                            <strong>Gasto mensual:</strong> {$data->monthly_expenditure}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </html>";
            
            $mail->send();
            echo json_encode(["message" => "Email enviado exitosamente!"]);
            http_response_code(200);
            
        } catch (Exception $e) {
            echo json_encode(["error" => "El email no ha podido enviarse: {$mail->ErrorInfo}"]);
            http_response_code(400);
        }
    }
}