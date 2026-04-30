# Cheating Prevention Requirements

## Purpose

Protect quiz fairness through proctoring, fullscreen checks, tab switching detection, behavior analysis, and violation logging.

## Users

- Student
- Admin

## Functional Requirements

- The system shall support camera-based proctoring where enabled.
- The system shall detect tab switching during protected quizzes.
- The system shall enforce fullscreen mode during protected quizzes.
- The system shall log violations.
- The system shall support behavior analysis rules.
- Admins shall be able to monitor violations.
- The system shall define configurable penalty actions for violations.
- The system shall communicate required permissions before protected quiz entry.

## Acceptance Criteria

- A protected quiz prompts for required camera access.
- Tab switching creates a violation record.
- Exiting fullscreen creates a violation record.
- Admin can view violation logs by quiz, user, and time.

## Dependencies

- Browser APIs
- Mobile camera access
- Admin monitoring
- Privacy and consent policy

