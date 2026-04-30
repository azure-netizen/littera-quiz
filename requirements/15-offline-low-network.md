# Offline and Low-Network Support Requirements

## Purpose

Support rural and low-network environments through question preloading, offline attempt storage, reconnect sync, and optimized data usage.

## Users

- Student

## Functional Requirements

- The system shall preload eligible questions before quiz start.
- The system shall support offline attempt storage.
- The system shall automatically sync attempts on reconnect.
- The system shall minimize payload size for low-network environments.
- The system shall show connection status to users.
- The system shall prevent duplicate sync of the same attempt.
- The system shall preserve quiz state during temporary network loss where possible.

## Acceptance Criteria

- A student can continue an eligible quiz during short network loss.
- Answers saved offline sync after reconnect.
- Duplicate offline submissions are not counted twice.
- Users can see whether their answers are saved locally or synced.

## Dependencies

- Local storage
- Sync service
- Question preloading
- Conflict handling

