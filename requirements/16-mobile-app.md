# Mobile App Requirements

## Purpose

Deliver Android and iOS apps using a shared web codebase through Capacitor, with push notifications, camera access, native sharing, and background sync.

## Users

- Student
- Teacher
- Admin

## Functional Requirements

- The mobile app shall use a single shared codebase through Capacitor.
- The app shall support Android.
- The app shall support iOS.
- The app shall support push notifications.
- The app shall support camera access for proctoring.
- The app shall support native sharing.
- The app shall support background sync where platform rules allow.
- The app shall preserve responsive UI layouts across common device sizes.

## Acceptance Criteria

- Android users can install and log in.
- iOS users can install and log in.
- Push notifications are received for quiz alerts.
- Camera permissions are requested for protected quizzes.
- Score or reward sharing opens native share options.

## Dependencies

- Capacitor
- Firebase Cloud Messaging
- Native permission configuration
- App store compliance

