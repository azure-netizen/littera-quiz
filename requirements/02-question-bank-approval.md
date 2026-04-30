# Question Bank and Approval Workflow Requirements

## Purpose

Provide a structured question bank that supports multiple question formats, teacher contributions, media questions, difficulty levels, bulk upload, and admin approval.

## Users

- Teacher
- Admin
- Student

## Step-wise Wireframe Flow

### Step 1: Teacher Question Submission

```text
+--------------------------------------------------+
| Submit Question                                  |
+--------------------------------------------------+
| Question Type                                    |
| [ MCQ ] [ Fill Blank ] [ Match ] [ Media ]       |
|                                                  |
| Category         [ ____________ ] [ Thumbnail ]  |
| Sub Category     [ ____________ ] [ Thumbnail ]  |
| Difficulty       [ Easy ] [ Medium ] [ Hard ]    |
|                                                  |
| Question Text                                    |
| [ ____________________________________________ ] |
|                                                  |
| Answer Data                                      |
| [ Options / Correct Answer / Match Pairs ]       |
|                                                  |
| [ Save Draft ] [ Submit for Approval ]           |
+--------------------------------------------------+
```

- Teacher selects question type before entering answer data.
- Category and sub category are mandatory.
- Each category and sub category can display a thumbnail.
- Media question types require image, audio, or video upload.

### Step 2: Bulk Question Upload

```text
+--------------------------------------------------+
| Bulk Upload Questions                            |
+--------------------------------------------------+
| Upload File                                      |
| [ Choose CSV / XLSX ]                            |
|                                                  |
| Expected columns:                                |
| Type, Question, Category, Sub Category,          |
| Difficulty, Options, Correct Answer, Media URL   |
|                                                  |
| [ Validate File ]                                |
+--------------------------------------------------+
```

- Bulk uploaded questions are validated before submission.
- Valid rows enter the approval queue unless auto-approval is configured.
- Invalid rows are shown in an error report.

### Step 3: Admin Approval Queue

```text
+--------------------------------------------------+
| Approval Queue                                   |
+--------------------------------------------------+
| Filters: [ Type ] [ Category ] [ Difficulty ]    |
|                                                  |
| Question         Teacher     Status              |
| MCQ              Ms. Patel   Pending             |
| Media            Mr. Khan    Pending             |
| Fill Blank       Ms. Das     Pending             |
+--------------------------------------------------+
```

- Admin can filter pending submissions by type, category, sub category, difficulty, and teacher.
- Pending questions are not available in live quizzes.

### Step 4: Admin Review Detail

```text
+--------------------------------------------------+
| Review Question                                  |
+--------------------------------------------------+
| Question preview                                 |
| Category / Sub Category / Difficulty             |
| Answer validation                                |
| Media preview                                    |
|                                                  |
| Rejection reason [ __________________________ ]  |
|                                                  |
| [ Reject ] [ Approve ]                           |
+--------------------------------------------------+
```

- Approved questions become available for quiz gameplay.
- Rejected questions do not appear in live quizzes.
- Rejection reason is visible to the submitting teacher.

### Step 5: Approved Question Bank

```text
+--------------------------------------------------+
| Approved Question Bank                           |
+--------------------------------------------------+
| Search [ ____________ ]                          |
| Filters [ Type ] [ Category ] [ Difficulty ]     |
|                                                  |
| Approved questions list                          |
| Teacher contribution counts                      |
+--------------------------------------------------+
```

- Approved question counts update teacher contribution metrics.
- Question bank supports search, filters, and quiz-ready status.

## Functional Requirements

- The system shall support MCQ questions.
- The system shall support fill-in-the-blank questions.
- The system shall support match-the-following questions.
- The system shall support image, audio, and video-based questions.
- The system shall allow each question to be tagged by difficulty: Easy, Medium, or Hard.
- The system shall support category-based question tagging.
- Every question shall have category and sub category.
- Each category and sub category shall have a thumbnail.
- The system shall support bulk question upload.
- Teachers shall be able to submit questions for approval.
- Admins shall be able to approve or reject submitted questions.
- Approved questions shall become available for quiz gameplay.
- Rejected questions shall not appear in live quizzes.
- The system shall track submitted and approved question counts per teacher.

## Acceptance Criteria

- A teacher can submit a question with type, difficulty, category, and answer data.
- An admin can review pending questions and approve or reject them.
- Only approved questions are used in games.
- Approved question count updates the teacher leaderboard score.
- Bulk uploaded questions enter the approval queue unless configured otherwise.

## Dependencies

- Media storage
- Admin review dashboard
- Teacher dashboard
- Question validation rules
