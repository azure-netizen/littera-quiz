# Question Bank and Approval Workflow Requirements

## Purpose

Provide a structured question bank that supports multiple question formats, teacher contributions, media questions, difficulty levels, bulk upload, and admin approval.

## Users

- Teacher
- Admin
- Student

## Functional Requirements
- 
- The system shall support MCQ questions.
- The system shall support fill-in-the-blank questions.
- The system shall support match-the-following questions.
- The system shall support image, audio, and video-based questions.
- The system shall allow each question to be tagged by difficulty: Easy, Medium, or Hard.
- The system shall support category-based question tagging.
- In every question there will  category and sub category
- Each category sub category  will have thumb nail
- 
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

