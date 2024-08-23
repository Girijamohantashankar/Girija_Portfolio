import "../../../styles/Certificate.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function CertificatePage() {
    return (
        <div className="Certificate_container">
            <h1>Certificate Me</h1>
            <p>This is the Certificate page of my portfolio.</p>
            <div className="card">
                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Certificate" className="card-image" />
                <div className="card-overlay">
                    <h2 className="card-title">Certificate Title</h2>
                    <div className="card-icons">
                        <i className="fa fa-certificate"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
