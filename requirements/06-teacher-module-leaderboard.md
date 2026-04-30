# Teacher Module and Teacher Leaderboard Requirements

## Purpose

Encourage teacher participation by tracking student enrollment, question contributions, approved questions, and teacher ranking.

## Users

- Teacher
- Admin

## Functional Requirements

- Teachers shall be able to enroll and manage students.
- Teachers shall be able to create and submit quiz questions.
- Teachers shall be able to track performance of their enrolled students.
- The system shall provide a dedicated teacher leaderboard.
- Teacher leaderboard score shall include student enrollment count.
- Teacher leaderboard score shall include number of submitted questions.
- Teacher leaderboard score shall weight approved questions higher.
- Default teacher score formula shall be:
  - Students enrolled x 2
  - Questions submitted x 3
  - Approved questions x 5
- Teacher leaderboards shall be available at School, Block, District, and State levels.
- Teachers shall receive ranking notifications.

## Acceptance Criteria

- Teacher dashboard displays students enrolled, questions submitted, approved questions, and rank.
- Teacher score is calculated using the configured formula.
- Approved questions increase teacher score more than submitted questions.
- Teacher rankings are filterable by School, Block, District, and State.
- Admins can review teacher contribution quality.

## Dependencies

- Student onboarding
- Question approval workflow
- Notification system
- Analytics

