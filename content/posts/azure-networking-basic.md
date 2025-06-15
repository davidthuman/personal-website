---
title: Basic Hub-and-Spoke Network in Azure
date: 2025-03-19
author: David Thuman
tags: "azure"
categories: "draft"
---

The Hub-and-Spoke network topology seems to be the recommended architecture for building out at cloud environment in Azure.

There are many articles from Microsoft that detail the basics of a Hub-and-Spoke network, =

From what it seems, each hub-and-spoke network should reside in a single Azure region. To add multiple regions to our cloud environment, peering should be done between the hub virtual networks 