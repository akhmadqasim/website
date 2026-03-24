import { ObfuscatedEmail } from "@/components/obfuscated-email"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-svh px-6 py-24">
      <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
        <h1>Privacy Policy for SIMSDIG</h1>
        <p><strong>Last Updated: January 5, 2026</strong></p>
        <p>
          This Privacy Policy describes how <strong>SIMSDIG</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and shares your information when you use our mobile application and web platform (the &ldquo;Service&rdquo;). SIMSDIG is a school management platform developed by Akhmad Qasim and team, used by multiple educational institutions across Indonesia. We are committed to protecting your personal data and your privacy in accordance with Indonesian data protection law (UU PDP No. 27/2022) and applicable regulations.
        </p>
        <p>
          By using the Service, you agree to the terms of this Privacy Policy and our <a href="/core/user-consent">User Consent Agreement</a>.
        </p>

        <h3>Table of Contents</h3>
        <ol>
          <li><a href="#information-we-collect">Information We Collect</a></li>
          <li><a href="#how-we-use">How We Use Your Information</a></li>
          <li><a href="#data-sharing">Data Sharing and Third-Party Services</a></li>
          <li><a href="#data-security">Data Security</a></li>
          <li><a href="#cookies">Cookies and Authentication</a></li>
          <li><a href="#data-retention">Data Retention and Deletion</a></li>
          <li><a href="#childrens-privacy">Children&apos;s Privacy</a></li>
          <li><a href="#data-storage">Data Storage Location</a></li>
          <li><a href="#data-breach">Data Breach Notification</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ol>

        <hr />

        <h2 id="information-we-collect">1. Information We Collect</h2>
        <p>
          We collect several types of information to provide educational services, school administration, and a secure user experience.
        </p>
        <p>
          <strong>Important:</strong> Most personal data listed below is originally collected <strong>offline by the school administration</strong> during the formal registration process. The Service serves as a digital interface to view and update this existing data. However, certain data — such as GPS coordinates, attendance photos, and session information — is collected directly by the Service during usage.
        </p>

        <h3>A. Data Shared Across All Roles</h3>
        <p>The following data is collected for all users (students, teachers, and staff):</p>
        <ul>
          <li><strong>Account:</strong> Email, secondary email, phone number, profile picture (avatar), and role-based permissions.</li>
          <li><strong>Authentication:</strong> Hashed passwords and verification codes. Authentication is handled through a secure web-based login flow.</li>
          <li><strong>Session Data:</strong> IP address, user agent, login history (country, browser type, device model, CPU architecture, OS version), and timestamp.</li>
          <li><strong>Attendance:</strong> Check-in/check-out timestamps, attendance status (present, late, permit, sick, absent, business trip), notes, and evidence attachments.</li>
          <li><strong>Location (Attendance):</strong> GPS coordinates (latitude/longitude) collected during check-in and check-out when GPS-based attendance is used. An out-of-zone flag indicates if the user is outside the designated area.</li>
          <li><strong>Biometric (Attendance):</strong> Photos captured during face-based attendance. The Service supports GPS, QR code, face recognition, and manual attendance methods.</li>
        </ul>

        <h3>B. Student Data (Peserta Didik)</h3>
        <ul>
          <li><strong>Identity:</strong> NIK, Family Card (KK) number, Birth Certificate number, SKHUN, NISN, and NIPD.</li>
          <li><strong>Demographics:</strong> Full name, gender, religion, blood type, place and date of birth, birth order, and nationality.</li>
          <li><strong>Physical Info:</strong> Height, weight, head circumference, and special needs (disability conditions).</li>
          <li><strong>Personal Interests:</strong> Hobby and aspiration (dream/cita-cita).</li>
          <li><strong>Family:</strong> Father, mother, and guardian information (name, NIK, education, occupation, income, contact).</li>
          <li><strong>Social Assistance:</strong> KPS/PKH, KIP, and PIP eligibility status including reasons for approval or rejection.</li>
          <li><strong>Household:</strong> Home address (RT/RW, sub-district, city, postal code), residence type, number of siblings, landline number.</li>
          <li><strong>Travel:</strong> Distance to school, travel time, and mode of transportation.</li>
          <li><strong>Academic:</strong> Class, grade level, academic year, enrollment type (new student, transfer, promoted), enrollment status, and homeroom teacher.</li>
        </ul>

        <h3>C. Teacher &amp; Staff Data (GTK)</h3>
        <ul>
          <li><strong>Identity:</strong> NIK, NIP (Employee ID), NPWP (Tax ID), tax name, and Family Card (KK) number.</li>
          <li><strong>Demographics:</strong> Full name, gender, religion, place and date of birth, nationality, and special needs.</li>
          <li><strong>Employment:</strong> Employment status and role within the school.</li>
          <li><strong>Family:</strong> Father and mother information, marital status, spouse name/NIP/occupation.</li>
          <li><strong>Contact:</strong> Phone number and home address.</li>
          <li><strong>Teaching (Teachers only):</strong> Subject assignments, class schedules, time slots, homeroom class, and attendance session management.</li>
        </ul>

        <h3>D. Letters &amp; Documents</h3>
        <ul>
          <li><strong>Letters:</strong> Subject, type of letter (dispensation, recommendation, duty assignment, exit permit, active student, custom), status, attachments, recipients, and processing history.</li>
        </ul>

        <h3>E. Regional Identifiers</h3>
        <ul>
          <li><strong>Country/Region:</strong> Country codes and regional identifiers used for administrative classification (e.g., province, city, district).</li>
        </ul>

        <hr />

        <h2 id="how-we-use">2. How We Use Your Information</h2>
        <p>We use the collected data for the following purposes:</p>
        <ul>
          <li><strong>Educational Administration:</strong> Managing student, teacher, and staff records across multiple schools.</li>
          <li><strong>Attendance Management:</strong> Recording and verifying attendance through GPS, QR code, face recognition, or manual entry to reduce fraud in presence tracking.</li>
          <li><strong>Service Delivery:</strong> Processing official school letters, documents, academic tracking, and class scheduling.</li>
          <li><strong>Security &amp; Authentication:</strong> Protecting your account from unauthorized access through login history monitoring and secure sessions.</li>
          <li><strong>School Logistics:</strong> Administrative classification for school zoning, transportation planning, and geofencing for attendance zones.</li>
          <li><strong>Communications:</strong> Sending important notifications regarding school activities or administrative status.</li>
        </ul>

        <hr />

        <h2 id="data-sharing">3. Data Sharing and Third-Party Services</h2>
        <p>We <strong>do not sell</strong> your personal data to third parties. Data is shared only under the following conditions:</p>
        <ul>
          <li><strong>School Authorities:</strong> Authorized teachers and administrators have access to relevant data for educational purposes.</li>
          <li><strong>Infrastructure Provider:</strong> The Service uses <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare</a> for security, performance, and content delivery. Cloudflare may process limited technical data (IP address, request headers) as part of its services.</li>
          <li><strong>No Analytics or Advertising:</strong> The Service does not integrate any third-party analytics, advertising, or tracking SDKs.</li>
          <li><strong>Legal Compliance:</strong> When required by law, government regulations, or legal processes.</li>
        </ul>

        <hr />

        <h2 id="data-security">4. Data Security</h2>
        <p>Given the highly sensitive nature of the data (such as NIK and Family Card numbers), we implement rigorous security measures using industry-standard, high-security algorithms:</p>
        <ul>
          <li><strong>Encryption at Rest:</strong> Sensitive identifiers and personal data are encrypted using industry-standard encryption algorithms.</li>
          <li><strong>Password Hashing:</strong> Passwords are hashed using a cryptographically secure, one-way hashing algorithm resistant to brute-force and rainbow table attacks.</li>
          <li><strong>Encryption in Transit:</strong> All data transmitted between the client and server is protected using HTTPS with modern TLS protocols.</li>
          <li><strong>Access Control:</strong> Data access is strictly restricted based on user roles and permissions. Each role has granular access to only the data necessary for their function.</li>
          <li><strong>Monitoring:</strong> Every login attempt is recorded to detect and prevent suspicious activities.</li>
        </ul>

        <hr />

        <h2 id="cookies">5. Cookies and Authentication</h2>
        <p>The Service uses a limited set of cookies for authentication and user preferences. These cookies:</p>
        <ul>
          <li>Are <strong>not</strong> used for advertising, tracking, or analytics.</li>
          <li>Are stored locally on your device.</li>
          <li>Do not collect or transmit data to third parties.</li>
        </ul>
        <p>The following cookies are used:</p>
        <ul>
          <li><strong>__Secure-core.session_token</strong> — Stores your authenticated session token. Expires when you sign out.</li>
          <li><strong>__Secure-core.session_data</strong> — Stores session-related metadata. Expires when you sign out.</li>
          <li><strong>__Secure-core.dont_remember</strong> — Controls whether the session persists after closing the browser.</li>
          <li><strong>colorPref</strong> — Stores your preferred color theme (light/dark mode). Persists across sessions.</li>
        </ul>

        <hr />

        <h2 id="data-retention">6. Data Retention and Deletion</h2>

        <h3>Retention Period</h3>
        <p>
          Your personal data is stored on the <strong>school&apos;s own server</strong> located in Indonesia and is retained for the duration of your enrollment at the school. The Service developer does not independently store or control this data — the school is the data controller.
        </p>

        <h3>Account Deactivation</h3>
        <p>To request account deactivation, you must submit an explicit request to the school&apos;s administrative office (Tata Usaha). Upon deactivation:</p>
        <ul>
          <li>Your login credentials are disabled and you can no longer access the Service.</li>
          <li>Your profile is no longer visible to other users within the Service.</li>
        </ul>

        <h3>Limitations on Data Deletion</h3>
        <p>
          Student, teacher, and staff records are part of the <strong>national education data system (Dapodik)</strong> maintained by the Indonesian Ministry of Education. Due to regulatory requirements, certain data (such as NISN, NIP, and enrollment records) <strong>cannot be permanently deleted</strong> from the school&apos;s system, as doing so would affect the integrity of national education records.
        </p>

        <h3>What You Can Do</h3>
        <ul>
          <li><strong>Update your data:</strong> Correct or modify personal information through the Service or by contacting your school administration.</li>
          <li><strong>Request deactivation:</strong> Submit an explicit request to the school&apos;s administrative office (Tata Usaha).</li>
          <li><strong>Revoke optional permissions:</strong> Disable device-level permissions (such as camera for profile photo) at any time through your device&apos;s system settings.</li>
        </ul>

        <hr />

        <h2 id="childrens-privacy">7. Children&apos;s Privacy</h2>
        <p>
          The Service is designed for students (typically aged 12 and above). We collect sensitive data of minors strictly for official school administration. By using the Service, parents or guardians are acknowledged to have provided consent through the school&apos;s formal registration process.
        </p>
        <p>
          Data of minors is managed by the school in compliance with Indonesian education regulations. The Service developer does not independently collect or process children&apos;s data beyond what the school provides.
        </p>

        <hr />

        <h2 id="data-storage">8. Data Storage Location</h2>
        <p>All data is stored on servers located in <strong>Indonesia</strong>, typically hosted on-premise at each respective school. The Service does not transfer personal data to servers outside of Indonesia.</p>

        <hr />

        <h2 id="data-breach">9. Data Breach Notification</h2>
        <p>
          In the event of a data breach that may compromise your personal data, we will notify affected users via email within 72 hours of becoming aware of the breach, in accordance with UU PDP No. 27/2022. The notification will include the nature of the breach, the data affected, and the steps we are taking to mitigate the impact.
        </p>

        <hr />

        <h2 id="contact">10. Contact Information</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>

        <p><strong>For Google Play Developers:</strong></p>
        <ul>
          <li><strong>Contact:</strong> Muhammad Fauzan Gifari Dzul Fahmi</li>
          <li><strong>Email:</strong> <ObfuscatedEmail user="fauzan.gifari30" domain="gmail.com" /></li>
        </ul>

        <p><strong>For Apple App Store Developers:</strong></p>
        <ul>
          <li><strong>Contact:</strong> Akhmad Qasim</li>
          <li><strong>Email:</strong> <ObfuscatedEmail user="aqas513" domain="icloud.com" /></li>
        </ul>

        <hr />
        <p className="text-sm text-muted-foreground">
          <em>Note: This policy may be updated periodically. Please check back for any changes.</em>
        </p>
      </article>
    </main>
  )
}
