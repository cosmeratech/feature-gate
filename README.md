# feature-gate

A rule-based feature access system where clicking a button does not guarantee permission.

# About the Project

FeatureGate simulates how real applications control access to features based on user type.
Instead of assuming all users are equal, the system enforces limits, blocks restricted actions, and allows special users to bypass rules.

This mirrors how modern SaaS products, AI tools, and subscription platforms work.

# Core Idea

Users attempt to use features such as downloading, uploading, or sharing.
The system decides whether the action is allowed based on predefined limits and user type.

Money is not involved here.
Only permission and rules matter.

# Concepts Demonstrated

This project focuses on the following programming concepts:

Private properties to protect internal data

Maps to store feature limits and usage

Inheritance to create different user types

Method overriding to change behavior in derived classes

Polymorphism through a shared interface (useFeature)

Guard clauses to block invalid actions early

# How It Works

Each user has:

A private usage record

A private set of feature limits

When a feature is used:

The system checks if it is allowed

If allowed, usage is recorded

If not allowed, the action is blocked

Different user types behave differently while using the same methods

# User Types

FreeUser
Has strict limits on feature usage

PremiumUser
Has higher limits but still follows rules

EnterpriseUser
Overrides limits and can use any feature without restriction
