import React, { useState } from "react";
import "../App.css";
import Logo from "../Images/Findr_logo_main.svg";
import { Link } from "react-router-dom";
import { Fade } from "react-bootstrap";
import About from "./About";

function TandC() {
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
          <hr />
          <h1 className="privacy-title-logo">TERMS OF USE</h1>
          {/* <div className="date" style={{ color: "#1a5d57", marginLeft: "87vw" }}>
          Last Updated- June 30th, 2020
        </div> */}
          <p className="theText">
            By creating a Findr account through one of our services (the mobile
            application or the website), you agree to be bound by:
          </p>
          <ul className="privacy-list">
            <li>These Terms of Use</li>
            <li>
              Our
              <b>
                <Link
                  to="/Privacy"
                  style={{ color: "#1a5d57", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </b>
              ,
              <b>
                <Link
                  to="/Guidelines"
                  style={{ color: "#1a5d57", textDecoration: "none" }}
                >
                  Community Guidelines
                </Link>
              </b>{" "}
              and
              <b>
                <Link
                  to="/Safety"
                  style={{ color: "#1a5d57", textDecoration: "none" }}
                >
                  Safety Tips
                </Link>
              </b>{" "}
              (collectively called the ‘Agreement’), each of which is
              incorporated by reference into this Agreement.
            </li>
          </ul>
          <p className="theText">
            If you do not accept and agree to be bound by all of the terms of
            this Agreement, please do not use the services.{" "}
          </p>
          <p className="theText">
            We may make changes to this Agreement and the services from time to
            time. These changes would reflect changes in laws, new features, or
            changes in business practices. The most recent version of the
            Agreement will be posted on the service under the settings tab. You
            should regularly check the most recent version for any changes in
            the Agreement. If you continue to use the service after any
            revisions in the Agreement, then you agree to the Agreement.{" "}
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Use and Elligibilty</h3>
          <p className="theText">
            You must be at least 13 years of age to create an account on Findr
            and use our services. By creating an account and using our services,
            you warrant that:
          </p>
          <ul className="privacy-list">
            <li>You can form a binding contract with Findr</li>
            <li>
              You are not a person who is barred from using the Service under
              the laws of the United States or any other applicable jurisdiction
            </li>
            <li>
              you will comply with this Agreement and all applicable local,
              state, national and international laws, rules and regulations
            </li>
            <li>
              you have never been convicted of a felony or indictable offense
              (or crime of similar severity), a sex crime, or any crime
              involving violence, and that you are not required to register as a
              sex offender with any state, federal or local sex offender
              registry.
            </li>
            <li>
              You must provide us accurate information including your real name,
              when you create a Findr account.
            </li>
          </ul>
          <p className="theText">
            Failure to abide by these guidelines may subject your account to be
            deleted without prior notice.
          </p>
          <p className="theText">
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password. We encourage you to use "strong" passwords (that use a
            combination of upper and lower case letters, numbers and symbols)
            with your account. Findr will not be liable for any loss or damage
            arising from your failure to comply with this instruction.
          </p>
          <p className="theText">
            If you are over the Minimum Age, but under the legal age of
            majority, your parent or legal guardian must consent to this Terms
            of Service and{" "}
            <b>
              <Link
                to="/Privacy"
                style={{ color: "#1a5d57", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
            </b>
            , and affirm that they accept this Agreement on behalf of, and bear
            all legal and financial responsibility and liability for the actions
            of, any child between the Minimum Age and majority, and expressly
            ratify and confirm any acts of any such child and all users of the
            account.
          </p>
          <p className="theText">
            You may not post violent, nude, partially nude, discriminatory,
            unlawful, infringing, hateful, pornographic or s exually suggestive
            documents, photos, videos or any other content via the Service.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Modyfing The Service</h3>
          <p className="theText">
            Findr is always striving to improve the Service and bring you
            additional functionality that you will find engaging and useful.
            This means we may add new product features or enhancements from time
            to time as well as remove some features, and if these actions do not
            materially affect your rights or obligations, we may not provide you
            with notice before taking them. We may even suspend the Service
            entirely, in which event we will notify you in advance unless
            extenuating circumstances, such as safety or security concerns,
            prevent us from doing so. We may terminate your account at any time
            without prior notice if you fail to abide by the terms in the
            Agreement.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">
            Safety; Your Interactions with Other Members.
          </h3>
          <p className="theText">
            Though Findr strives to encourage a respectful member experience
            through features like the double opt-in that allows members to
            communicate only after they have both indicated interest in one
            another, it is not responsible for the conduct of any member on or
            off of the Service. You agree to use caution in all interactions
            with other members, particularly if you decide to communicate off
            the Service or meet in person. In addition, you agree to review and
            follow Findr’s{" "}
            <b>
              <Link
                to="/Safety"
                style={{ color: "#1a5d57", textDecoration: "none" }}
              >
                Safety Tips{" "}
              </Link>
            </b>{" "}
            prior to using the Service. You agree that you will not provide your
            financial information (for example, your credit card or bank account
            information), or wire or otherwise send money to other members.
          </p>
          <p className="theText">
            YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS.
            YOU UNDERSTAND THAT FINDR DOES NOT CONDUCT CRIMINAL BACKGROUND
            CHECKS ON ITS MEMBERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF
            ITS MEMBERS. FINDR MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE
            CONDUCT OF MEMBERS
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Rights Findr Grants You.</h3>
          <p className="theText">
            Findr grants you a personal, worldwide, royalty-free,
            non-assignable, nonexclusive, revocable, and non-sublicensable
            license to access and use the Service. This license is for the sole
            purpose of letting you use and enjoy the Service’s benefits as
            intended by Findr and permitted by this Agreement. Therefore, you
            agree not to:
          </p>
          <ul className="privacy-list">
            <li>
              use the Service or any content contained in the Service for any
              commercial purposes without our written consent.
            </li>
            <li>
              copy, modify, transmit, create any derivative works from, make use
              of, or reproduce in any way any copyrighted material, images,
              trademarks, trade names, service marks, or other intellectual
              property, content or proprietary information accessible through
              the Service without Findr’s prior written consent.
            </li>
            <li>
              express or imply that any statements you make are endorsed by
              Findr.
            </li>
            <li>
              use any robot, bot, spider, crawler, scraper, site
              search/retrieval application, proxy or other manual or automatic
              device, method or process to access, retrieve, index, "data mine",
              or in any way reproduce or circumvent the navigational structure
              or presentation of the Service or its contents.
            </li>
            <li>
              use the Service in any way that could interfere with, disrupt or
              negatively affect the Service or the servers or networks connected
              to the Service.
            </li>
            <li>
              upload viruses or other malicious code or otherwise compromise the
              security of the Service.
            </li>
            <li>
              manipulate identifiers in order to disguise the origin of any
              information transmitted to or through the Service.
            </li>
            <li>
              "frame" or "mirror" any part of the Service without Findr’s prior
              written authorization.
            </li>
            <li>
              use meta tags or code or other devices containing any reference to
              Findr or the Service (or any trademark, trade name, service mark,
              logo or slogan of Findr) to direct any person to any other website
              for any purpose.
            </li>
            <li>
              modify, adapt, sublicense, translate, sell, reverse engineer,
              decipher, decompile or otherwise disassemble any portion of the
              Service, or cause others to do so.
            </li>
            <li>
              use or develop any third-party applications that interact with the
              Service or other members' Content or information without our
              written consent.
            </li>
            <li>
              use, access, or publish the Findr application programming
              interface without our written consent.
            </li>
            <li>
              probe, scan or test the vulnerability of our Service or any system
              or network.
            </li>
            <li>
              encourage or promote any activity that violates this Agreement.
            </li>
          </ul>
          <p className="theText">
            Findr may investigate and take any available legal action in
            response to illegal and/ or unauthorized uses of the Service,
            including termination of your account.
          </p>
          <p className="theText">
            Any software that we provide you may automatically download and
            install upgrades, updates, or other new features. You may be able to
            adjust these automatic downloads through your device's settings.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Rights you Grant Findr.</h3>
          <p className="theText">
            By creating an account, you grant to Findr a worldwide,
            transferable, sub-licensable, royalty-free, right a nd license to
            host, store, use, copy, display, reproduce, adapt, edit, publish,
            modify and distribute information you post, upload, display or
            otherwise make available (collectively, "post") on the Service or
            transmit to other members (collectively, "Content"). Findr’s license
            to your Content shall be non-exclusive, except that Findr’s license
            shall be exclusive with respect to derivative works created through
            use of the Service. You agree that any Content you place or that you
            authorize us to place on the Service may be viewed by other members
            and may be viewed by any person visiting or participating in the
            Service (such as individuals who may receive shared Content from
            other Findr members).
          </p>
          <p className="theText">
            You agree that all information that you submit upon creation of your
            account is accurate and truthful and you have the right to post the
            Content on the Service and grant the license to Findr above.
          </p>
          <p className="theText">
            You understand and agree that we may monitor or review any Content
            you post as part of a Service. We may delete any Content, in whole
            or in part, that in our sole judgment violates this Agreement or may
            harm the reputation of the Service.
          </p>
          <p className="theText">
            When communicating with our customer care representatives, you agree
            to be respectful and kind. If we feel that your behavior towards any
            of our customer care representatives or other employees is at any
            time threatening or offensive, we reserve the right to immediately
            terminate your account.
          </p>
          <p className="theText">
            Please be informed that Findr may access, store and disclose your
            account information and Content if required to do so by law, by
            performing its agreement with you, or in a good faith belief that
            such access, storage or disclosure satisfies a legitimate interest,
            including to: (i) comply with legal process; (ii) enforce the
            Agreement; (iii) respond to claims that any Content violates the
            rights of third parties; (iv) respond to your requests for customer
            service; or (v) protect the rights, property or personal safety of
            the Company or any other person.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Community Rules.</h3>
          <p className="theText">
            By using the Service, you agree that you will not:
          </p>
          <ul className="privacy-list">
            <li>
              use the Service for any purpose that is illegal or prohibited by
              this Agreement.
            </li>
            <li>use the Service for any harmful or nefarious purpose</li>
            <li>use the Service in order to damage Findr</li>
            <li>
              violate our Community Guidelines, as updated from time to time.
            </li>
            <li>spam, solicit money from or defraud any members.</li>
            <li>
              impersonate any person or entity or post any images of another
              person without his or her permission.
            </li>
            <li>
              bully, "stalk", intimidate, assault, harass, mistreat or defame
              any person.
            </li>
            <li>
              post any Content that violates or infringes anyone's rights,
              including rights of publicity, privacy, copyright, trademark or
              other intellectual property or contract right.
            </li>
            <li>
              post any Content that is hate speech, threatening, sexually
              explicit or pornographic; incites violence; or contains nudity or
              graphic or gratuitous violence.
            </li>
            <li>
              post any Content that promotes racism, bigotry, hatred or physical
              harm of any kind against any group or individual.
            </li>
            <li>
              solicit passwords for any purpose, or personal identifying
              information for commercial or unlawful purposes from other members
              or disseminate another person's personal information without his
              or her permission.
            </li>
            <li>
              use another member's account, share an account with another
              member, or maintain more than one account.
            </li>
            <li>
              create another account if we have already terminated your account,
              unless you have our permission.
            </li>
          </ul>
          <p className="theText">
            Findr reserves the right to investigate and/ or terminate your
            account if you have violated this Agreement, misused the Service or
            behaved in a way that Findr regards as inappropriate or unlawful,
            including actions or communications that occur on or off the
            Service.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Other Members' Content.</h3>
          <p className="theText">
            Although Findr reserves the right to review and remove Content that
            violates this Agreement, such Content is the sole responsibility of
            the member who posts it, and Findr cannot guarantee that all Content
            will comply with this Agreement. If you see Content on the Service
            that violates this Agreement, please report it within the Service
            under the settings tab.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">
            Notice and Procedure for Making Claims of Copyright Infringement.
          </h3>
          <p className="theText">
            If you believe that your work has been copied and posted on the
            Service in a way that constitutes copyright infringement, please
            provide our Copyright Agent with the following information:
          </p>
          <ul className="privacy-list">
            <li>
              an electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright interest;
            </li>
            <li>
              a description of the copyrighted work that you claim has been
              infringed;
            </li>
            <li>
              a description of where the material that you claim is infringing
              is located on the Service (and such description must be reasonably
              sufficient to enable us to find the alleged infringing material);
            </li>
            <li>
              your contact information, including address, telephone number and
              email address;
            </li>
            <li>
              a written statement by you that you have a good faith belief that
              the disputed use is not authorized by the copyright owner, its
              agent, or the law; and
            </li>
            <li>
              a statement by you, made under penalty of perjury, that the above
              information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner's
              behalf.
            </li>
          </ul>
          <p className="theText">
            Notice of claims of copyright infringement should be provided to the
            Company's Copyright Agent via email to <b>findr.study@gmail.com</b>{" "}
            or via mail to the following address:
          </p>
          <p className="theText">
            3025 The Credit Woodlands, Mississauga, ON L5C 2V3.{" "}
          </p>
          <p className="theText">
            Findr will terminate the accounts of repeat infringers.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">DISCLAIMERS</h3>
          <p className="theText">
            FINDR PROVIDES THE SERVICE ON AN “AS IS” AND “AS AVAILABLE” BASIS
            AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, GRANTS NO WARRANTIES
            OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH
            RESPECT TO THE SERVICE (INCLUDING ALL CONTENT CONTAINED THEREIN),
            INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF
            SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE OR NON-INFRINGEMENT. FINDR DOES NOT REPRESENT OR WARRANT
            THAT (A) THE SERVICE WILL BE UNINTERRUPTED, SECURE OR ERROR FREE,
            (B) ANY DEFECTS OR ERRORS IN THE SERVICE WILL BE CORRECTED, OR (C)
            THAT ANY CONTENT OR INFORMATION YOU OBTAIN ON OR THROUGH THE SERVICE
            WILL BE ACCURATE.
          </p>
          <p className="theText">
            FINDR TAKES NO RESPONSIBILITY FOR ANY CONTENT THAT YOU OR ANOTHER
            MEMBER OR THIRD PARTY POSTS, SENDS OR RECEIVES THROUGH THE SERVICE.
            ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE
            SERVICE IS ACCESSED AT YOUR OWN DISCRETION AND RISK.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">LIMITATION OF LIABILITY</h3>
          <p className="theText">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
            FINDR, ITS AFFILIATES, EMPLOYEES, LICENSORS OR SERVICE PROVIDERS BE
            LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL,
            SPECIAL OR PUNITIVE DAMAGES, INCLUDING, WITHOUT LIMITATION, LOSS OF
            PROFITS, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
            DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (I)
            YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE,
            (II) THE CONDUCT OR CONTENT OF OTHER MEMBERS OR THIRD PARTIES ON,
            THROUGH, OR FOLLOWING USE OF THE SERVICE; OR (III) UNAUTHORIZED
            ACCESS, USE OR ALTERATION OF YOUR CONTENT, EVEN IF FINDR HAS BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT WILL FINDR’S
            AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE SERVICE
            EXCEED THE GREATER OF THE AMOUNT PAID, IF ANY, BY YOU TO FINDR FOR
            THE SERVICE AND USD100 WHILE YOU HAVE AN ACCOUNT.
          </p>
          <p className="theText">
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
            CERTAIN DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND LIMITATIONS IN
            THIS SECTION MAY NOT APPLY TO YOU.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">ARBITRATION</h3>
          <p className="theText">
            Except if you opt-out or for disputes relating to: (1) your or
            Findr’s intellectual property (such as trademarks, trade dress,
            domain names, trade secrets, copyrights and patents, you agree that
            all disputes between you and Findr (whether or not such dispute
            involves a third party) with regard to your relationship with Findr,
            including without limitation disputes related to these Terms of Use,
            your use of the Service, and/or rights of privacy and/or publicity,
            will be resolved by binding, individual arbitration under the
            Canadian Arbitration Association's rules for arbitration of
            consumer-related disputes and you and Findr hereby expressly waive
            trial by jury. As an alternative, you may bring your claim in your
            local "small claims" court, if permitted by that small claims
            court's rules. You may bring claims only on your own behalf. Neither
            you nor Findr will participate in a class action or class-wide
            arbitration for any claims covered by this agreement. You also agree
            not to participate in claims brought in a private attorney general
            or representative capacity, or consolidated claims involving another
            person's account, if Findr is a party to the proceeding. This
            dispute resolution provision will be governed by the Ontario
            Arbitration Act, 1991. In the event the Canadian Arbitration
            Association is unwilling or unable to set a hearing date within one
            hundred and sixty (160) days of filing the case, then either Findr
            or you can elect to have the arbitration administered instead by the
            Judicial Arbitration and Mediation Services. Judgment on the award
            rendered by the arbitrator may be entered in any court having
            competent jurisdiction. Any provision of applicable law
            notwithstanding, the arbitrator will not have authority to award
            damages, remedies or awards that conflict with these Terms of Use.
          </p>
          <p className="theText">
            You may opt out of this agreement to arbitrate. If you do so,
            neither you nor Findr can require the other to participate in an
            arbitration proceeding. To opt out, you must notify Findr in writing
            within 30 days of the date that you first became subject to this
            arbitration provision. You must use this address to opt out: Findr,
            3025 The Credit Woodlands, Mississauga, ON L5C 2V3.
          </p>
          <p className="theText">
            You must include your name and residence address, the email address
            you use for your Findr account, and a clear statement that you want
            to opt out of this arbitration agreement.
          </p>
          <p className="theText">
            If the prohibition against class actions and other claims brought on
            behalf of third parties contained above is found to be
            unenforceable, then all of the preceding language in this
            Arbitration section will be null and void. This arbitration
            agreement will survive the termination of your relationship with
            Findr.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Indemnity by You</h3>
          <p className="theText">
            You agree, to the extent permitted under applicable law, to
            indemnify, defend and hold harmless Findr, our affiliates, and their
            and our respective officers, directors, agents, and employees from
            and against any and all complaints, demands, claims, damages,
            losses, costs, liabilities and expenses, including attorney’s fees
            due to, arising out of, or relating in any way to your access to or
            use of the Service, your Content, or your breach of this Agreement.
          </p>
        </div>
        <div>
          <h3 className="privacy-title">Entire Agreement; Other.</h3>
          <p className="theText">
            This Agreement, along with the{" "}
            <b>
              <Link
                to="/Privacy"
                style={{ color: "#1a5d57", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
            </b>
            , the
            <b>
              <Link
                to="/Safety"
                style={{ color: "#1a5d57", textDecoration: "none" }}
              >
                Safety Tips{" "}
              </Link>
            </b>{" "}
            and any terms disclosed and agreed to by you on using the features,
            products or services we offer on the Service, contains the entire
            agreement between you and Findr regarding the use of the Service. If
            any provision of this Agreement is held invalid, the remainder of
            this Agreement shall continue in full force and effect. The failure
            of the company to exercise or enforce any right or provision of this
            Agreement shall not constitute a waiver of such right or provision.
            You agree that your Findr account is non-transferable and all of
            your rights to your account and its Content terminate upon your
            death . No agency, partnership, joint venture, fiduciary or other
            special relationship or employment is created as a result of this
            Agreement and you may not make any representations on behalf of or
            bind Findr in any manner.
          </p>
        </div>
        <About />
      </div>
    </Fade>
  );
}

export default TandC;
