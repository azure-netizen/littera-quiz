# School Master Data Bulk Upload Requirements

## Purpose

Allow Admin and Super Admin users to bulk upload school and geography master data so onboarding can fetch School Name, Village, CRC, Block, District, and State using school code.

## Users

- Admin
- Super Admin

## Step-wise Wireframe Flow

### Step 1: Select Master Data Type

```text
+--------------------------------------------------+
| School Master Upload                             |
+--------------------------------------------------+
| Upload Type                                      |
| [ State ] [ District ] [ Block ] [ CRC ]         |
| [ Village ] [ School ]                           |
+--------------------------------------------------+
```

- Admin selects which master data type is being uploaded.
- Upload types must follow the required dependency order.

### Step 2: Upload File

```text
+--------------------------------------------------+
| Upload CSV / XLSX                                |
+--------------------------------------------------+
| [ Choose File ]                                  |
|                                                  |
| Expected fields shown for selected upload type   |
|                                                  |
| [ Validate File ]                                |
+--------------------------------------------------+
```

- System accepts CSV or XLSX files.
- System shows required columns for the selected upload type before validation.

### Step 3: Preview and Validate

```text
+--------------------------------------------------+
| Upload Preview                                   |
+--------------------------------------------------+
| Total records: 500                               |
| Valid records: 482                               |
| Duplicate codes: 4                               |
| Missing fields: 6                                |
| Invalid parent references: 8                     |
|                                                  |
| [ Download Error Report ] [ Confirm Import ]     |
+--------------------------------------------------+
```

- Admin can confirm import only after validation succeeds.
- Failed rows are available in an error report.

### Step 4: Import Confirmation

```text
+--------------------------------------------------+
| Import Complete                                  |
+--------------------------------------------------+
| Uploaded type: School                            |
| Imported records: 482                            |
| Skipped records: 0                               |
|                                                  |
| [ View Master Data ]                             |
+--------------------------------------------------+
```

- Imported records become available for school-code lookup during onboarding.
- Import history is retained for audit and troubleshooting.

## Bulk Upload Order

Upload files must be processed in the following order because each level depends on codes from the levels above it:

1. State
2. District
3. Block
4. CRC
5. Village
6. School

## Bulk Upload File Fields

| Upload Type | Required Fields |
| --- | --- |
| State | State Name, State Code |
| District | District Name, District Code, State Code |
| Block | Block Name, Block Code, State Code, District Code |
| CRC | CRC Name, CRC Code, State Code, District Code, Block Code |
| Village | Village Name, Village Code, State Code, District Code, Block Code, CRC Code |
| School | School Name, School Code, State Code, District Code, Block Code, CRC Code, Village Code |

## Functional Requirements

- The system shall allow Admin and Super Admin users to upload school and geography master data.
- The system shall support CSV and XLSX upload formats.
- The system shall validate uploads in dependency order: State, District, Block, CRC, Village, and School.
- The system shall show required columns for the selected upload type before file validation.
- The system shall validate required fields for every row.
- The system shall validate parent-code references before import.
- The system shall prevent duplicate codes within the same master data type.
- The system shall require school code to be unique.
- The system shall generate an upload preview before import.
- The system shall provide a downloadable error report for failed validation rows.
- The system shall store successful imports for use in school-code lookup during onboarding.
- The system shall retain upload history with uploaded file name, upload type, uploaded by, upload time, status, and record counts.

## Validation Rules

- State codes must exist before uploading District data.
- District codes must exist before uploading Block data.
- Block codes must exist before uploading CRC data.
- CRC codes must exist before uploading Village data.
- Village codes must exist before uploading School data.
- A School row must include School Name, School Code, State Code, District Code, Block Code, CRC Code, and Village Code.
- Import cannot be confirmed while duplicate codes, missing required fields, or invalid parent-code references exist.

## Acceptance Criteria

- Admin can upload State, District, Block, CRC, Village, and School master data in the defined order.
- Upload validation prevents duplicate codes, missing fields, and invalid parent-code references.
- Admin can download an error report when validation fails.
- Admin can confirm import only after validation succeeds.
- Imported school data can be fetched during onboarding by school code.
- School-code lookup returns School Name, Village, CRC, Block, District, and State.

## Dependencies

- Admin control center
- School and geography master database
- File storage for uploaded files and error reports
- Authentication and role-based access control
