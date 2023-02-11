import React from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";

class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <section class="faq_sectiona">
            <h1>Frequently Asked Questions(FAQ)</h1>

            {/*   <!-- <div class="faq_links">
                <a href="#">General Questions</a>
                <a href="#">About VCE Files and Software</a>
                <a href="#">Premium Files</a>
                <a href="#">ExamCollection Account and Other Technical Details</a>
            </div> --> */}

            <div class="faq_container">
              <h2>Main Question</h2>

              <div>
                <a href="#">How to download free VCE files?</a>
                <p>
                  You need to have an ExamCollection account to be able to
                  download free VCE files. You can register your account here.
                  Account creation is a two-step process: first you enter your
                  email address, and then you need to confirm ownership of this
                  email address. Ownership can be confirmed in 2 ways: 1. Check
                  your mailbox and find the email message from
                  support@examcollection.com: it contains a confirmation link.
                  Just click on it and your account will be activated. 2. Send
                  an email message to confirm@examcollection.com. After that,
                  your account will be activated within 5 minutes.
                </p>
              </div>
            </div>

            <div class="faq_container">
              <h2>General questions</h2>

              <div>
                <a href="#">What is Examcollection.com?</a>
                <p>
                  Examcollection is a community of IT certification exam takers
                  committed to sharing their exam knowledge and experience with
                  their peers, as well as those looking for free information
                  sources to study for their IT exams. Our members share their
                  knowledge on IT certification exams in convenient VCE files.
                  Please note that Examcollection is basically an information
                  sharing platform: we do not sell software, neither do we
                  support or troubleshoot it (keep reading to find out where you
                  can get your VCE software). All we do is let people share
                  their VCE uploads, download files and post their feedback.
                </p>
                <img
                  style={{ width: "100%", padding: 10 }}
                  src="./faqimage.png"
                  alt=""
                />
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">What exactly are VCE files?</a>
                <p>
                  VCE (Virtual CertExam) is a file format that realistically
                  simulates IT exam environment, allowing for the most
                  convenient exam preparation you can get - in the convenience
                  of your own home or on the go. If you have ever seen IT exam
                  simulations, chances are, they were in the VCE format. For
                  details on how to create, use and convert VCE files, please
                  refer to the separate section below.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">Who can upload the files?</a>
                <p>
                  All files are uploaded by Examcollection community members. We
                  encourage everyone who has recently taken an exam and/or has
                  come across some braindumps that have turned out to be true to
                  share this information with the community by creating and
                  uploading VCE files.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">Who can download the files?</a>
                <p>
                  The files may be downloaded by individuals for their personal
                  use - your exam preparation. This means that downloading files
                  for commercial use/reselling is not permitted. Examcollection
                  reserves the right to block users suspected of reselling the
                  files at our sole discretion.
                </p>
              </div>
            </div>

            <div class="faq_container">
              <h2>About VCE Files and Software</h2>

              <div>
                <a href="#">What is VCE?</a>
                <p>
                  VCE is a file format associated with Visual CertExam Software.
                  This format and software are widely used for creating tests
                  for IT certifications. To create and open VCE files, you will
                  need to purchase, download and install{" "}
                  <a href="#">VCE Exam Simulator</a> on your computer.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">Where do I get VCE Exam Simulator?</a>
                <p>
                  VCE Exam Simulator can be purchased from its developer,{" "}
                  <a href="http://www.avanset.com/">http://www.avanset.com/</a>{" "}
                  Please note that Examcollection does not sell or support this
                  software. Should you have any questions or concerns about
                  using this product, please contact{" "}
                  <a href="#">Avanset support team</a> directly.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">Can I convert PDF files into VCE?</a>
                <p>
                  Yes, PDF files can be turned into VCE easily with{" "}
                  <a href="#">Exam Formatter</a>, a free tool that allows for an
                  easy file conversion. A tutorial on how to convert PDF into
                  VCE files, which also includes some other tips and tricks,{" "}
                  <a href="#">is available here.</a>
                </p>
              </div>
            </div>

            <div class="faq_container">
              <h2>Premium Files</h2>

              <div>
                <a href="#">What are the Premium Files?</a>
                <p>
                  You have an option of purchasing Premium VCE files generously
                  provided by our sponsor, PassGuide. Available for the most
                  popular exams at a discounted price, these VCEs are truly
                  reliable and reputable tools to prepare for your IT
                  certification exams..
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">
                  How are these Premium VCE files different from all other
                  uploads?
                </a>
                <p>
                  These VCEs have been developed by industry professionals, who
                  have been working with IT certifications for years and have
                  close ties with IT certification vendors and holders - with
                  most recent exam questions and some insider information. As
                  PassGuide makes their files available for a small fee, they
                  make a great source of reliable information. Of course we're
                  not saying that the free VCEs uploaded by our members aren't
                  reliable (experience shows that they are). Yet, with everyone
                  being able to create and upload the file, you should use your
                  critical thinking as to what you download and memorize... you
                  know what we're saying.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">
                  How long will I receive updates for the Premium VCE File that
                  I purchased?
                </a>
                <p>
                  Free updates are available during 30 days after you purchased
                  Premium VCE file. After 30 days the file will become
                  unavailable.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">
                  How many Premium VCE files can be downloaded with Unlimited
                  Access to ExamCollection Premium files?
                </a>
                <p>
                  Any 10 Premium VCE files can be Downloaded per month if you
                  buy Unlimited Access for any duration.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">
                  Can I get refund for any month charged subscription?
                </a>
                <p>
                  Free updates are available during 30 days after you purchased
                  Premium VCE file. After 30 days the file will become
                  unavailable.
                </p>
              </div>
            </div>

            <div class="faq_container">
              <h2>Examcollection Account and Other Technical Details</h2>

              <div>
                <a href="#">
                  How do I register with Examcollection.com? Is the registration
                  free?
                </a>
                <p>
                  The registration with Examcollection is FREE. To register,
                  please fill out a brief form here:
                  <a href="./login.html">Go To Login</a>
                  <br />
                  <br />
                  - After submitting the form, you will receive an email from
                  support@examcollection.com that will include your confirmation
                  link.
                  <br />
                  <br />-{" "}
                  <strong>
                    IMPORTANT: make sure your mailbox does not treat our message
                    as spam by adding <a href="#">support@examcollection.com</a>{" "}
                    to your contact list.
                  </strong>
                  <br />
                  <br />- You will need to click on the link in the confirmation
                  email to finalize your registration process. The email usually
                  arrives within a few minutes, you will receive the
                  confirmation email. If you do not see it in your inbox, be
                  sure to check your Spam or Junk folders. - If you still can't
                  find the email, please add support@examcollection.com to the
                  address book of your email account and use{" "}
                  <a href="#">Forgot Password page.</a>
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">
                  Why do I need that confirmation email? Can't you just log me
                  in?
                </a>
                <p>
                  Like many other Internet resources, we employ the 2 step
                  registration process in order to ensure that our users are
                  honest in providing their email information, and to prevent
                  spam registrations. This is a necessity if we want to keep our
                  website a clean friendly community populated by honest users,
                  so we truly appreciate your cooperation.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">I can't find an email from you. What's wrong?</a>
                <p>
                  If you do not see emails from us, that's most likely because
                  they have landed to your Spam/Junk folder. Please check these
                  folders, and once you find an email from
                  support@examcollection.com, open it and remove the Spam label.
                  To prevent examcollection.com messages from being marked as
                  Spam in the future, add{" "}
                  <a href="#">support@examcollection.com</a> to your email
                  address book, so it is recognized as a trusted email. If you
                  need to retrieve your registration confirmation email and link
                  to finalize your registration, please use the Forgot Password
                  page, and we'll re-send the message to you. Before you
                  proceed, however, make sure you have completed the previous
                  steps so this email doesn't end up in your spam folder again.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">
                  How many Premium VCE files can be downloaded with Unlimited
                  Access to ExamCollection Premium files?
                </a>
                <p>
                  Any 10 Premium VCE files can be Downloaded per month if you
                  buy Unlimited Access for any duration.
                </p>
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#">
                  Can I get refund for any month charged subscription?
                </a>
                <p>
                  Free updates are available during 30 days after you purchased
                  Premium VCE file. After 30 days the file will become
                  unavailable.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default FAQ;
