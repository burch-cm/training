---
title: White Paper Proposals
---

Topic: Using Version Control for Documents
==========================================

Learning Objectives:
--------------------

**Understand why document version control is important**

Documents are revised throughout their useful life, and often have multiple
authors or collaborators. When multiple individuals are editing a document, it
can be difficult to track changes between versions. A naïve solution is to
include a version in the document title, but this quickly becomes unwieldy. In
large organizations, like the FAA or other federal agencies, document
distribution is also challenging – clients may be working off an old version of
a file which was attached to an email, and the underlying document has since
been updated, leading to confusion and potential disaster. A more formal
approach to document version control will address these issues and allow for
more rapid, accurate, and efficient collaboration and communication.

**Identify tools and techniques for document versioning**

Some existing tools already use versioning: Word files can track changes and
Sharepoint can track versions over time. These options are rarely used, however,
and are difficult to implement. The MS Word change-tracking solution introduces
its own problem of a single point of failure – if the file becomes corrupted,
all versions are lost. Ad hoc methods currently used leave file systems
cluttered and cause confusion, so any potential solution will need to avoid
those pitfalls.

Github, Bitbucket, and Gitlab are three popular cloud-based solutions for
document versioning, and the git program and server are deployable on private
machines behind the firewall, if that degree of security is required. These
tools allow for collaboration, multiple authors, organizational ownership, and
easy difference tracking for most file types.

The ability to quickly see the differences between two versions of the same file
is one of GitHub’s most useful features, but it cannot work with proprietary or
binary files (like .docx or .xlsx files). This restriction can be circumvented
by creating a markdown version of the file alongside the Word version (via the
Writage tool for MS Word). The markdown documents can be parsed by GitHub (and
Bitbucket, Gitlab, etc)’s editors, and will show the differences between the
underlying files.

**Be capable of installing and using necessary tools for version control**

The basic requirements for using GitHub for document management are an
installation of git on the local machine and an account at GitHub.com.
Additional tools, like the GitHub desktop make versioning much easier, and
plugin like Writage allow for easy conversion from proprietary formats to
formats which will allow easy highlighting of differences.
