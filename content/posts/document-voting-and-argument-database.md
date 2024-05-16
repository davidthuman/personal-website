---
title: "Document, Voting, and Argument Database (DVAD)"
date: 2021-08-12
author: Anonymous
tags: ["politics", "technology"]
categories: "draft"
---

I have tried to start making this.

The concept of creating some type of application, whether that be a website, app, etc., first came through my mind around senior year of high school. The idea of the website ‘wethepeople.com’ at first was going to be site where clear, detailed information about politics, elections, Congress would be easily accessible to all. I wanted summaries of legislature that were going through Congress, outlines of candidates’ polices and ideas, as well as a history of all politician’s past action for an increased amount of accountability. This, however, was more work than I was both able and capable of doing, so it was placed in the back of my mind for later reference.

I then enter college where I learn how to code, and how to learn to code. Although none of my actual classes have taught me web development or app development, I began to teach myself these things. Learning to code on the internet, for free, is very easy as long as you do it. So at this point in my life (July 22nd, 2021), I have the ability to develop a website that looks goo enough for people to use.

However, there was some mental development that happened in-between these two time points. If you look into the Modern Senate page (I will make you track back in the links to find it) you can see the brainstorming behind an application quickly termed ‘Document, Voting, and Argument Database’. In short, I wanted an application that shrink down the arguments made for or against legislature in Congress, pin them to an actual word, phase, or paragraph in the bill, and allow the public to easily access this information. An Adobe Acrobat Reader on steroids, with a connected network and database. We can see a trend here, minimize the amount of friction between the United States’ public and their political processes.

So now we have an idea that one person cannot possibly do on their own and one that needs to convince politicians to use it. Mixing these ideas and adding as open-source aspect to the information gather, we arrive at the website I am slowly building right now.

I still want the name ‘We The People’, and I also think taking a deep dive into the laws that govern our country is foundational, so the idea is to create a forum-type website that discusses the words that make up our laws. For people who want to join, they will be able to comment arguments on legislative documents that can be seen by everyone else on the side. In that way, we are outsourcing some of the information collection and creation to our users. Other information about voting history and policy proposal from our politicians can be webscraped from government and politician site. I would also like to include some type of information processing backend to see trends in language contained in our laws and attempt to make broader connection with that.

## Legislation Version Control

July 17th, 2023

A [report](https://www.congress.gov/117/cprt/HPRT46273/CPRT-117HPRT46273.pdf) from the Select Committee on the Modernization of Congress cites issues that Congress has with collaboration and civility, support agencies, and evidence-based policymaking.

From the II. Background and Need For Recommendations,
> "3. Members contribute to the legislative process when bills they’ve previously introduced are incorporated into larger bills. The public, however, has limited options for tracking these individual member contributions to larger legislation. The Committee received testimony supporting a better and clearer accounting that enhances transparency and makes member involvement in legislation clearer, particularly when standalone bills are incorporated into larger legislation or ‘‘omnibus’’ packages. While members can currently publicize their own contributions through press releases and other means, there is no formal, publicly accessible way for tracking detailed legislative history. Furthermore, the ‘‘related bills’’ tab on Congress.gov does not provide sufficiently comprehensive information and does not always accurately encapsulate all or most related bills, particularly across multiple sessions of Congress. At the Committee’s Member Day Hearing on April 15, 2021, it was suggested that incorporating hyperlinks and implementing a track changes style system for Congress.gov would provide transparency and a clearer accounting of the legislative process."

Version control, or source control, is the best practice for tracking and managing changes to software. GitHub, which uses Git, is an company owned by Microsoft that enables both individuals and companies to track and manage their software through their cloud service.

First, there should be a standardized text format uses throughout the United States government. PDFs and other web-based displays should still be used, however, when version control is involved, having an easy-to-edit text-based file to track is important. Moreover, with the grow in text-processing softwares and large language models (LLMs), having an file format that is easily processed by a computer is important. [Markdown](https://en.wikipedia.org/wiki/Markdown) would be a great universal format for behind-the-scenes document files. Markdown provides lightweight formatting to plain text that is human-readable but still provides standard and important formatting options.

With documents now formatted in Markdown, version control software is able to track all text insertions, word edits, or merges that come when creating legislation.

In the end, utilizing technology enables our government to have a more transparent legislative process. Congress.gov is a good start, but improvements can and should be made.

## Online Forum-like Communication

> "4. There is currently no tool offered to committee chairs and/ or ranking members who wish to solicit private feedback from committee members on committee operations."

Making posts, adding comments to reports, linking to interesting research papers are all important when building an online community with a shared interest. Private emails are a way to send feedback to an individual or group, however, giving an option to make this comment public is important. Public feedback sparks discussion, and incorporates different viewpoints that may be impossible to create via multiple one-on-one conversations.

## Congress-member Profiles

> "9. Members and staff can have difficulty identifying colleagues who share mutual policy interests, which can inhibit productive collaboration on policy. Informal collaboration happens through caucuses, listservs, the e-dear colleague system, and organically through member and staff-level relationships, but it can still be difficult to identify members to collaborate that have interests in specific topics. Some of these current tools, such as email listservs and the e-dear colleague system, are outdated or inefficient ways to find partners for collaboration at the beginning stages of the legislative process."

This is more of a personal opinion, but I believe that open-source is better than closed-source in the long run. This does not have to mean no data or information is allowed to be privates, but build, developing, and researching in the public-eye, or at least within Congress, should be the best practice.

Extending off of the version control software for legislation, members of Congress should possess profiles where other members can view their work. If one member is going on a bill, gather research and other data, outside members should be able to comment, suggest changes, or merge and collaborate pervious work.

## Discussion Pods

This section deviates from the discussion of a large software to help members of Congress be more efficient and effective with their time, however, the bolstering of civility and genuine conversations, which may be in-person, are within the scope.

> "7. Although there occasionally may be bipartisan events for House members sponsored by outside entities, there is no neutral party within the House of Representatives offering regular, bipartisan gatherings focused on helping members find common ground and mutual understanding."
> "10. Several outside organizations have created models for facilitating private conversations between members with the goal of identifying and fostering common ground. However, there is a lack of awareness about these resources, in part because the House does not provide information on formal opportunities for facilitated conversations for members wishing to use them."
> "13. Even as the private sector experiments with and sees success with flexible shared workspaces that foster collaboration and creativity, the House remains very traditional in how it assigns its very limited office space for its staff. Currently the only flex space available is set up for short meetings and there is no place on the House campus designed specifically for staff from multiple offices to work together and collaborate on an idea."

From the public view, especially through the view of social media, members of the House of Representatives seem to be extremely partisan. Whether this is just for show (this is true), the fact that loud, angry voices get the most views (also true), the representatives are probably more civil behind closed doors or in private conversations.

However, actual small-group discussions between the left and the right, having at every level of seniority, is probably not the most likely occurrence. I doubt that more junior-level representatives want to "waste" their time having non-serous discussions with members of the opposite party. We will force them.

As stated above, people, when given a spotlight or a platform, may act in disingenuous ways. The verbal antics that occur during House floor debates can be childish. However, when talking one-on-one with someone, their public persona tends to dissolve. I would like to find research on if the number of participants or perceived viewership of a conversation or discussion affects the content of that discussion.

