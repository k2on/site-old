interface QRProps {
    color: string;
}

function QRCode(props: QRProps) {
    // Ignore formatting for the QR code text.
    // prettier-ignore
    return (
<pre style={{lineHeight: '1em', top: '-1px', backgroundColor: props.color}} className="tracking-tightest text-sm w-fit relative">
█████████████████████████<br/>
██ ▄▄▄▄▄ █▀ ▄▄██ ▄▄▄▄▄ ██<br/>
██ █   █ █▄▀▄█▄█ █   █ ██<br/>
██ █▄▄▄█ █   ▀██ █▄▄▄█ ██<br/>
██▄▄▄▄▄▄▄█ █▄▀▄█▄▄▄▄▄▄▄██<br/>
██▄▄▀▄▀▀▄ ▀▀ ▀ █   █▄▄▀██<br/>
██▀▀█▀▀ ▄ ▄ ▀▄ █▀█▀▀▄▀ ██<br/>
██▄█▄███▄▄▀█▀ ▀█▀ █▄██▀██<br/>
██ ▄▄▄▄▄ █▄▀▄  ▄▄▀ ▄▄ ███<br/>
██ █   █ █▀▀ ▄▀▄██ ▄█▄ ██<br/>
██ █▄▄▄█ █▀▀▄▄  ██▄█▄█▄██<br/>
██▄▄▄▄▄▄▄█▄▄▄███▄█▄██▄███<br/>
█████████████████████████<br/>
</pre>
    )
}
export default QRCode;
