import { ObfuscatedEmail } from "@/components/obfuscated-email"

export default function UserConsentPage() {
  return (
    <main className="min-h-svh px-6 py-24">
      <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
        <h1>Your Privacy Choices</h1>
        <p><strong>Last Updated: January 5, 2026</strong></p>
        <p>
          This page explains how you can manage, modify, and delete your personal data within <strong>SIMSDIG</strong>. For full details on what data we collect and how it is used, please refer to our <a href="/core/privacy-policy">Privacy Policy</a>.
        </p>

        <hr />

        <h2 id="update-data">Update Your Data</h2>
        <p>You can update your personal information in two ways:</p>
        <ul>
          <li><strong>Through the Service:</strong> Log in to SIMSDIG and navigate to your profile settings to update information such as email, phone number, profile picture, and other editable fields.</li>
          <li><strong>Through the school:</strong> Contact your school&apos;s administrative office (Tata Usaha) to request changes to data that cannot be modified directly through the Service, such as official identification numbers (NIK, NISN, NIP).</li>
        </ul>

        <hr />

        <h2 id="deactivate-account">Deactivate Your Account</h2>
        <p>To deactivate your account, you must submit an explicit request to the school&apos;s administrative office (Tata Usaha). Upon deactivation:</p>
        <ul>
          <li>Your login credentials will be disabled.</li>
          <li>You will no longer be able to access the Service.</li>
          <li>Your profile will no longer be visible to other users.</li>
        </ul>
        <p>
          <strong>Note:</strong> Account deactivation does not result in permanent deletion of all data. See <a href="#data-deletion-limits">limitations on data deletion</a> below.
        </p>

        <hr />

        <h2 id="data-deletion-limits">Limitations on Data Deletion</h2>
        <p>
          Certain records are part of the <strong>national education data system (Dapodik)</strong> maintained by the Indonesian Ministry of Education. Due to regulatory requirements, the following data <strong>cannot be permanently deleted</strong>:
        </p>
        <ul>
          <li>NISN (National Student ID)</li>
          <li>NIP (Employee ID)</li>
          <li>Enrollment records and academic history</li>
          <li>Other data required for Dapodik compliance</li>
        </ul>
        <p>
          Deleting this data would affect the integrity of national education records. The school, as the data controller, retains this data in compliance with Indonesian education regulations.
        </p>

        <hr />

        <h2 id="revoke-permissions">Revoke Permissions</h2>
        <p>You can revoke device-level permissions at any time through your device&apos;s system settings:</p>
        <ul>
          <li><strong>Camera:</strong> Used for profile photo and face-based attendance. Revoke via Settings → SIMSDIG → Camera.</li>
          <li><strong>Location:</strong> Used for GPS-based attendance check-in/check-out. Revoke via Settings → SIMSDIG → Location.</li>
        </ul>
        <p>
          Revoking permissions may limit certain features of the Service (e.g., GPS attendance will not work without location access).
        </p>

        <hr />

        <h2 id="data-portability">Data Portability</h2>
        <p>
          If you wish to obtain a copy of your personal data stored in the Service, please contact your school&apos;s administrative office (Tata Usaha). The school, as the data controller, can provide your data in a commonly used format upon request.
        </p>

        <hr />

        <h2 id="contact">Contact</h2>
        <p>For any questions or requests regarding your privacy choices, please contact:</p>
        <ul>
          <li><strong>Your school&apos;s administrative office (Tata Usaha)</strong> — for data updates, account deactivation, and data portability requests.</li>
          <li><strong>Akhmad Qasim</strong> (Developer) — <ObfuscatedEmail user="aqas513" domain="icloud.com" /> — for technical inquiries about the Service.</li>
        </ul>

        <hr />
        <p className="text-sm text-muted-foreground">
          <em>See also: <a href="/core/privacy-policy">Privacy Policy</a></em>
        </p>
      </article>
    </main>
  )
}
