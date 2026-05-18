# Access management Requirements

## Purpose

Allow Admin and Super Admin users to assign access roles for School, Village, CRC, Block, District, Commissionary, and State with scoped access selection at each level.

## Users

- Admin
- Super Admin

## Role Hierarchy

Highest to lowest:

1. State
2. Commissionary
3. District
4. Block
5. CRC
6. Village
7. School

## Core Rule: Scoped Access

Each role can be scoped to one or more units at its level or any lower level.

Examples:

- A State role can be scoped to:
	- All districts/blocks/villages/schools within the state, or
	- Specific commissionary areas, or
	- Specific districts, or
	- Specific blocks, CRCs, villages, or schools.
- The same scoping rule applies for Commissionary, District, Block, CRC, and Village roles down to School.

This means a higher role does not automatically grant full access to the entire state; access is limited to the selected scope.

## Step-wise Flow

1. Admin selects a role level.
2. System shows scope picker for the selected role level and all lower levels.
3. Admin selects one or more scope units.
4. System previews the resulting access coverage.
5. Admin confirms and saves.

## Bulk Upload Order

1. State
2. Commissionary
3. District
4. Block
5. CRC
6. Village
7. School

## Functional Requirements

- Role assignment must require scope selection.
- Scope selection supports multiple items at the same level.
- Scope selection supports mixed levels below the role level.
- Access queries must filter by the selected scope only.
- Admin can view, edit, and revoke role assignments.

## Validation Rules

- At least one scope item must be selected.
- Selected scope items must belong to the chosen role level or a lower level.
- No duplicate scope items in a single assignment.

## Acceptance Criteria

- A State role can be scoped to one or more commissionary areas, districts, blocks, CRCs, villages, or schools.
- Access is restricted to the selected scope and does not auto-include the entire higher region.
- The same scoped access rule applies at each lower level down to School.
- Role assignment fails if no scope is selected.

## Dependencies

- Master data for State, Commissionary, District, Block, CRC, Village, and School.

