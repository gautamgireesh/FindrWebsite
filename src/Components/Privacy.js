import React, { useState } from "react";
import "../App.css";
import Logo from "../Images/Findr_logo_main.svg";
import { Link } from "react-router-dom";
import { Fade } from "react-bootstrap";
import About from "./About";

function Privacy() {
  const [open, setOpen] = useState(false);
  setTimeout(() => setOpen(true), 500);
  window.scrollTo(0, 0);
  return (
    <Fade in={open}>
      <div className="legal-background">
        <div>
          <Link to="/">
            <img src={Logo} className="logo-for-terms" />
          </Link>
        </div>
        <div>
          <hr />
          <p className="theText">
            <h1 className="privacy-title-logo">PRIVACY POLICY</h1>
            <br></br>
            Welcome to Findr’s Privacy Policy. Thank you for taking the time to
            read through this.
          </p>
          <p className="theText">
            Maintaining the privacy of our users is our top priority. We
            recognise that your privacy is very important and we appreciate you
            trusting us with it. This Privacy Policy describes Findr’s policies
            and procedures on the collection, use, disclosure and sharing of
            your information when you use the Findr service via the Findr mobile
            application or the Findr website (For simplicity, we will refer to
            both these as our ‘services’ in this Privacy Policy).
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Information we collect</h3>
          <p className="theText">
            Findr is meant to help you, as students, develop better connections
            with peers from various fields and work more efficiently. Having
            said that, to help you find better and more meaningful connections,
            we would require some basic information including your basic profile
            information and your interests.
          </p>
          <p className="theText">
            We also collect information generated as you use our services, for
            example access logs, as well as information from third parties, like
            when you access our services through your canvas account. If you
            want additional info, we go into more detail below.
          </p>
          <h4 className="privacy-sub-title">Information you give us</h4>
          <p className="theText">
            You choose to give us certain information when you use our services.
            This includes:
          </p>
          <ul className="privacy-list">
            <li>
              On creation of your account, you provide us with your login
              credentials as well as some basic information including name,
              gender, date of birth, and your university.
            </li>
            <li>
              On the completion of your profile, you provide us with information
              on your courses, interests, projects and work experience. Here,
              you can also share with us details about your personality and a
              description of what you are looking for. To add a profile picture,
              you may give us access to your camera or photo album. Some of this
              information you provide us may be considered sensitive in certain
              jurisdictions (for example, your gender, race or ethnic origins).
              By choosing to provide this information, you consent to our
              processing of that information.{" "}
            </li>
            <li>
              If you choose to contact our customer care team, we collect that
              information during the interaction and this is subsequently used
              for training purposes.
            </li>
            <li>
              Finally, we will also process your chats (if the report option is
              used) with other users along with all the content you publish.{" "}
            </li>
            <li>
              If you choose to use the invite option on our service to invite
              your friends, we will ask for that friend’s email address and
              automatically send an email invitation. Findr collects your
              friend’s email address to automatically send the invitation and
              tracks if your invited friends accepted these requests. Doing so
              helps us keep a track of the success rate of these invitations. By
              providing your friend’s email addresses to us, you warrant that
              you have their consent to do so and for Findr to use this
              information as described above.{" "}
            </li>
          </ul>
          <h4 className="privacy-sub-title">
            Information we receive from others
          </h4>
          <p className="theText">
            In addition to the information you provide us, we receive
            information about you from other users, including:{" "}
          </p>
          <li className="privacy-list">
            Other users may provide information about you as they use our
            service. We may collect information about you from other users if
            they contact us about you (all the information listed above).
          </li>
          <h4 className="privacy-sub-title">
            Information we collect when you use our services
          </h4>
          <p className="theText">
            When you use our services, we may collect information about which
            features you use, how you used them and which devices you used to
            access our services.
          </p>
          <ul className="privacy-list">
            <li>
              When you use our services, we collect information about your
              activity on our services. These include - date and time you logged
              in, features you used, filters you applied, profiles you visited,
              users you interacted with, date and time of your interactions and
              the number of messages you sent to each user.{" "}
            </li>
            <li>
              <b>Device information</b> We collect information from and about
              the device(s) you use to access our services, including:
            </li>
            <ul>
              <li>
                advertising IDs (such as Google’s AAID and Apple's IDFA, both of
                which are randomly generated numbers that you can reset by going
                into your device’ settings), and, time zones, identifiers
                associated with cookies or other technologies that may uniquely
                identify your device or browser
              </li>
              <li>
                information on your wireless and mobile network connection, like
                your service provider and signal strength;
              </li>
              <li>
                information on device sensors such as accelerometers, gyroscopes
                and compasses.
              </li>
            </ul>
            <li>
              <b>Other information with your consent</b> If you give us
              permission, we can collect your precise geolocation (latitude and
              longitude) through various means, depending on the service and
              device you’re using, including GPS, Bluetooth or Wi-Fi
              connections. The collection of your geolocation may occur in the
              background even when you aren’t using the services if the
              permission you gave us expressly permits such collection. If you
              decline permission for us to collect your geolocation, we will not
              collect it. Similarly, if you consent, we may collect your photos
              and videos.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="privacy-title">COOKIES AND OTHER DATA COLLECTION </h3>
          <p className="theText">
            We make the use of cookies to make your experience on our app as
            seamless as possible. Among other things, cookies help us
            authenticate you and ensure you don’t have to log in each time you
            use our services.
          </p>
          <p className="theText">
            Cookies are small text files that are sent to or accessed from your
            web browser or your device’s memory. A cookie typically contains the
            name of the domain (internet location) from which the cookie
            originated, the “lifetime” of the cookie (i.e., when it expires) and
            a randomly generated unique number or similar identifier. A cookie
            also may contain information about your device, such as user
            settings, browsing history and activities conducted while using our
            services.{" "}
          </p>
          <p className="theText">
            Cookies are placed on your device by us to adapt our website to your
            browser’s language preferences and to better understand your use of
            our website.
          </p>
          <p className="theText">
            <b>Session cookies</b> only last until you close your browser. We
            use sessional cookies to learn more about your use of our website
            during one browser session and help you use our website more
            efficiently.
          </p>
          <p className="theText">
            <b>Persistent cookies</b> last even after you close your browser.
            These are used to help you sign in to our website again and for
            analytical purposes.Most browsers can be configured not to accept
            cookies and not use local storage.
          </p>
          <p className="theText">The cookies we use are generalised below:</p>
          <ul className="privacy-list">
            <li>
              Authentication and security cookies. We use these cookies to
              enable you to remain logged into Findr, and verify that it is you
              as you use Findr. This helps keep your account safe and secure
              from unauthorized use, and helps combat spam and other abuse which
              violates our policies.
            </li>
            <li>
              Analytics and research cookies. We use these cookies to better
              understand how people use Findr. For example, how often particular
              features are used, or which content leads towards user activity.
            </li>
            <li>
              Product features and setting cookies. We use these cookies to
              enable the functionality of some features within the Findr
              product, in particular to personalize the experience towards you.
              We also use these cookies to store certain of your preferences and
              settings.
            </li>
            <li>
              Also, Findr does not respond to ‘Do Not Track’ (DNT) signals
            </li>
          </ul>
          <h4 className="privacy-title">How We Use Your Information</h4>
          <ul className="privacy-list">
            <li>
              We use the information we collect to provide you a better and
              seamless experience on Findr and managing your account. Also, it
              helps us provide you with better customer support.{" "}
            </li>
            <li>
              We use the data collected to improve the recommendations that are
              given to you. We analyze your profile and your activity on our
              services and thereby personalise the preferences and cards that
              are shown to you.
            </li>
            <li>
              We use your data to link new devices to provide a consistent
              experience on using our services. We do this by linking the
              devices and browsing data.
            </li>
            <li>
              We use the data collected to constantly modify our services and
              provide new features to you.
            </li>
            <li>
              We use the data you provide to perform data analysis to protect
              you and other users from any forbidden (refer to community
              guidelines) or illegal activities.
            </li>
            <li>
              We use the data to comply with legal requirements and law
              enforcement.
            </li>
          </ul>
          <h4 className="privacy-title">How we share your information</h4>
          <ul className="privacy-list">
            <li>
              We share the information you make public with other users. For
              example, when you create a new card and fill out your information,
              that is available to the public. Please be careful with your
              information and only make that information public that you are
              comfortable sharing since neither you nor us can control what
              others do once they see your information.
            </li>
            <li>
              We may disclose your information if reasonably necessary: (i) to
              comply with a legal process, such as a court order, subpoena or
              search warrant, government / law enforcement investigation or
              other legal requirements; (ii) to assist in the prevention or
              detection of crime (subject in each case to applicable law); or
              (iii) to protect the safety of any person.
            </li>
            <li>
              We may also share information: (i) if disclosure would mitigate
              our liability in an actual or threatened lawsuit; (ii) as
              necessary to protect our legal rights and legal rights of our
              users, business partners or other interested parties; (iii) to
              enforce our agreements with you; and (iv) to investigate, prevent,
              or take other action regarding illegal activity, suspected fraud
              or other wrongdoing.
            </li>
          </ul>
          <p className="theText">
            By using the Service you consent to the transfer of your information
            to the United States and/or to other countries for storage,
            processing and use by Findr in accordance with our Privacy Policy.
          </p>
          <p className="theText">
            We may aggregate and/or anonymize information collected through the
            Service so that the information does not identify you. We may use
            aggregated, anonymized, and other de-identified information for any
            purpose, including for research and marketing purposes, and our use
            and disclosure of such information is not subject to any
            restrictions under this Privacy Policy.
          </p>
          <h4 className="privacy-title">How We Protect Your Information</h4>
          <p className="theText">
            We work hard to protect you from unauthorized access to or
            alteration, disclosure or destruction of your personal information.
            As with all technology companies, although we take steps to secure
            your information, we do not promise, and you should not expect, that
            your personal information will always remain secure.
          </p>
          <p className="theText">
            We regularly monitor our systems for possible vulnerabilities and
            attacks and regularly review our information collection, storage and
            processing practices to update our physical, technical and
            organizational security measures.
          </p>
          <p className="theText">
            We may suspend your use of all or part of the services without
            notice if we suspect or detect any breach of security. If you
            believe that your account or information is no longer secure, please
            notify us immediately.
          </p>
          <h4 className="privacy-title">Your Choices About Your Information</h4>
          <p className="theText">
            You may, of course, decline to submit information through the
            Service, in which case Findr may not be able to provide certain
            services to you. You may update or correct your account information
            and email preferences at any time by logging in to your account.{" "}
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Children's Privacy</h3>
          <p className="theText">
            Our services are restricted to users who are 13 years of age or
            older. We do not permit users under the age of 13 on our platform
            and we do not knowingly collect personal information from anyone
            under the age of 13. If you suspect that a user is under the age of
            13, please use the reporting mechanism available through the
            service.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Privacy Policy Changes</h3>
          <p className="theText">
            Because we’re always looking for new and innovative ways to help you
            build meaningful connections, this policy may change over time. We
            will notify you before any material changes take effect so that you
            have time to review the changes.
          </p>
        </div>
        <About />
      </div>
    </Fade>
  );
}

export default Privacy;
