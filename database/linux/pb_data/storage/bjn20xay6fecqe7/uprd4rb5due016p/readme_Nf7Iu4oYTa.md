# Contracting Tool Documentation

## Introduction

The goal of this application is to automatically create Conference & Event Services contracts from events that are submitted to StarRez.  The main components to this build are: 

* StarRez REST API
* LaTeX Document Tree
* File Share API
* Data-connecting logic

## What are the contracts?

For Cornell University, there are External and Internal contracts. For each of these types, there can be contracts for Conferences, Weddings or Events, and Addendums.

The baseline contract is the External Conference. This contains most of the legal and ammenities information that the Conference and Event Services provides.

The External Wedding/Event is this baseline, minus Housing and Dining.

For Internal Conferences, it is minus insurance and indemnity from the baseline.

Internal Weddings/Event are very rare.

## LaTeX

When brainstorming implementations for this application, an interface between Python and an word processor was needed. The best path would have been a Python library to interface with Microsoft Word documents. One exists, python-docx, however, the functionality is small and somewhat poor. After much thought, the use of a LaTeX file was a great second option.

LaTeX is an opne-source tool for standardizing document formatting. Using a programming-like syntax, we can create .tex files that contain information about document formatting, text, and organization. Unlike the proprietary software that Word uses to parse its .docx files, LaTeX are text-based, which means they can be easily read and written through Python strings. Moreover, PDFs can easily be made from the LaTeX files.

To use the `pdflatex file.tex` command, you must first install a LaTeX builder.  For this containized solution, `sudo apt-get install texlive-latex-base`, `sudo apt-get install texlive-fonts-recommended`, and `sudo apt-get install texlive-fonts-extra`.  We also need to install the specific packages that are used to build our contract. Here is the current list:

* geometry
* fancyhdr
* graphicx
* lastpage
* sectsty
* amsmath
* color
* soul
* booktabs

## JSON Connection Logic

Each contract type has a .json file that hold metadata, StarRez report IDs, and the contract's sections, subsections, and inserts. These JSON files are used to separate functionality from information. The functions found in the source code need no updating when event contracts change or when StarRez information changes. 

Meta hold information only relevant to the developers of this tool.

Reports hold report ID for StarRez reports that are used to collect all the information necessary to create a contract of this type.

Section connects are made with report information to dictate whether a section in the contract will be included or excluded. The same connections are made for subsections.

This JSON also contains a dictionary with the inserts as keys. The values for the keys are predefined information about the inserts. This information may include whether the insert has a StarRez report connection, whether the contract mapping is one-to-one or is part of a table, or whether the insert of a datetime or boolean type, which then needs further modification.

## Docker

This application is containerized with Docker. Usually a simple Python API would not need containerization, however, the machine that runs this application needs more software requirements than standalone Python. Because the contracts are built from LaTeX files, a compiler from the .tex files to a PDF is needed. Creating a Docker image an uploading it to another machine is the easiest way to get this application running.

## Source Code

### StarRez API

StarRez is the monlithic software tool used by Cornell University and the Conference & Event Services department to track housing for people and events on and off campus.  The StarRez team provides a RESTful API access to connect to our StarRez database.  Given your StarRez username and a user-create token, you can use this module to query, update, and select specifc entries within the database.

`class StarRezAPI(username: str, password: str)` will initialize a connection to the StarRez REST API. The class's methods are listed below.

`status_code(code: int)` will return whether the status code `code` is good, or an error code.

`getContractReport(reportID: int)` will return a list of dictionary containing the data from a StarRez report with ID `reportID`.

`reduceGroupHousing(housing: list)` will return a list of dictionaries that describe the housing information for an event.

### File Share API

Cornell University's Student and Campus Life department (and all sub-departments, of which CES is apart of) has a file system that machines can connect to via the internet.  As there is no front-end from this application, event planners will be able to access the PDf contracts through this the File Share.

The Conference & Event Services' File Share is connected to with an Server Message Block (SMB) protocol. The module allows for basic directory exploration, reading and writing of files, and the creation of new directories.

`class FileShareAPI(username, password)` will initialize a connection to the File Share with your authentication credentials. The class's methods are listed below.

`ls()` will print a list of all the files or directories within the current directory.

`cd(dir: str)` will change the directory into the given directory.

`base()` will change the directory to the base directory of "\\files.cornell.edu\scl\SCL-Depts\Campus Life\Residential and Event Services\Conference Services"

`mkdir(dir: str)` will make a directory in current directory will the given name.

`create(file_name: str, file_data)` will create a file in the current directory with the given name and write it with the given data. Open mode is 'w' which will file over any data if the file already exists.

`open(file_name: str, file_data)` will open a file in the current directory with the given name and write it with the given data. Open mode is 'a' which will add the data to the end of the file.

`read(file: str)` will return the data from given file name in the current directory.

### Helper

`milTostan(time: str)` will change military time to standard time.

### JSON RW

`read_json(filename: str)` will read the data from the given JSON file name and return the data as a Python object.

`write_json(fileName: str, newJSON)` will write the given JSON data to the given file name. Open mode is 'w' which will file over any data if the file already exists.

`read_level(fileName: str, level: str)` will return a Python object of the JSON data in the given file at the given key `level`.

`write_level(fileName: str, level: str, level_data)` will write `fileName` with `level_data` at the key `level`.

### Latex Tree

This file contains all the functions to create, modify, update, and save Latex file. A Latex file can be parse as a string and modified through Python's string methods. However, when these Latex files are long, searching for sub-string with similar styles becomes more complicated. Moreover, changing the Latex file in logical way (removing whole sections or subsections) also becomes more complicated. To combat this, the Latex file is transformed into a tree. The root node holds all the formatting information of the Latex file, with its children being sections of the file. The tree data structure allows us to easily transverse different sections or subsection and remove whole sections or subsections by removing their associated node from a list.

The event contracts that we are attempting to generate are written out in LaTeX. Parts of the contract that contain event-specific information are encoded as inserts (ex. >EVENT NAME<). These inserts are connected to reporting information from StarRez and used to create contracts for a given event.

#### Defining Data Structures

A `NodeType` enumeration is created to signal whether a node in the tree is of type root, section, subsection, table, or leaf.

A dataclass `Node` is created to hold information associated with a node. This information includes the node's type, the parent node, a list of its children nodes, the text in represents in the Latex file.

#### Tree Functions

`changeableList(text)` will return a list of tuples. The tuples will contain a substring of `text` and whether the substring is an insert or not.

`populateTree(latex: str)` will return a root Node with the information in `latex`.

`printTree(root: Node)` will print a human-readable version of the latex tree.

`updateSubsections(subsection: Node, subsections: dict, inserts: dict)` will update `subsection` to either include its information or to drop all the children of the node and add a single child node saying that the subsection will not be included in the contract. `subsections` is the dictionary of connections for subections to StarRez event information. `inserts` is the dictionary of inserts to StarRez event information.

`updateSections(section: Node, sections: dict, subsections: dict, inserts: dict)` will update `section` with the same logic that is described in the `updateSubsections()` function, and will also call that function on `section`'s subsections.

`updateTree(root: Node, sections: dict, subsections: dict, insetrs: dict)` will call `updateSections()` for all the sections in the children list of `root`.

`dfsNew(latex: list, node: Node)` is a recursive function append the text of `node` to `latex`, and then call `dfsNew()` on all of `node`'s children.

`updateTree2(root: Node, sections: dict, subsections: dict, inserts: dict)` return a root Node with sections and subsections removed, based in boolean information in `inserts`, with connections found in `sections` and `subsections`.

#### Update JSON Functions

`sections(latex: str)` will return the set of sections that is in `latex`.

`subsections(latex: str)` will return the set of subsections that is in `latex`.

`inserts(latex: str)` will return the set of inserts that is in `latex`.

`updateJsonType(latex: str, contractType: str, dataType: str)` updates the `dataType` key in the connection JSON file governed by `contractType` with the information pulled from `latex`.

`updateJson(latex: str, contractType: str)` calls `updateJsonType()` for data types of 'sections', 'subsections', and 'inserts'.

#### Update Latex Functions

`buildTex(root: Node)` will return a latex-string that represents `root`.

`updateTable(latex: str, inserts: dict)` will return a latex-string with the table that is associated with `inserts` updated.

`updateInserts(latex: str, inserts: dict)` will return a latex-string updated with the information in `inserts`.

#### Saving Functions

`saveTex(name: str, latex: str)` will save a .tex file, written with `latex`, with the file name of `name`.

`createPDF(name: str)` will save a .pdf file using the .tex file governed by `name`.

### Contract Pick

#### Helper Functions

`collectData(reportID: int, eventID: int, starAPI)` will return a list containing dictionaries that represent the data pulled from StarRez using the report ID and event ID.

`timeClean(dataInserts: list, inserts: dict)` will format the time-data in `inserts` using information in `datainserts`.

`calculateTotalCharge(charges: list)` will return the total charge from a list of dictionaries that contain event charge information.

`updateLatex(latex: str, dataInserts: dict, table: bool)` will return an updated Latex string that will have insertd report data.

#### Contract Builder Functions

`externalWedding(eventID: int)` will create a latex file and a PDF file. These files are the contract of the event with `eventID`.

`externalConference(eventID: int)` will create a latex file and a PDF file. These files are the contract of the event with `eventID`.

Both the functions above have similar internal code. 