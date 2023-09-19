import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState([]);
  const [courseName, setCourseName] = useState(null);
  const [uploadInfo, setUploadInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sectionHeading, setSectionHeading] = useState("");
  const [homePageNavbarVisibility, setHomePageNavbarVisibility] =
    useState(false);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjectsReload, setSubjectsReload] = useState(false);
  // used in upload file component....
  const [inputEmailId, setInputEmailId] = useState("");
  //used in get verified route...
  const [
    emailIdVerifiedMessageVisibility,
    setEmailIdVerifiedMessageVisibility,
  ] = useState(false);

  const semesterOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const courseOptions = [
    "BTech",
    "BCA",
    "BBA",
    "Hospitality",
    "Humanties",
    "Law",
    "Hotel Management",
    "BA Hons. Psychology",
  ];
  //
  // Section End
  //
  //New Section Start
  //
  // course-wise-subjects-array
  //
  //
  //
  //
  // BTECH
  //
  // Semester 1
  const btechSubjectsSem1 = [
    {
      subjectName: "Communication Skills",
      subjectCode: "DEN001A",
      fileNamingFormatName: "COMMUNICATIONSKILLS",
    },
    {
      subjectName: "Programming in C++",
      subjectCode: "NEX0019",
      fileNamingFormatName: "PROGRAMINGINC++",
    },
    {
      subjectName: "Engineering Mathematics-I",
      subjectCode: "DMA001A",
      fileNamingFormatName: "ENGINEERINGMATHEMATICS1",
    },
    {
      subjectName: "Applied Physics",
      subjectCode: "DPH001A",
      fileNamingFormatName: "APPLIEDPHYSICS",
    },
    {
      subjectName: "Basic Electronics Engineering",
      subjectCode: "DEE001A",
      fileNamingFormatName: "BASICELECTRONICSENGINEERING",
    },
    {
      subjectName: "Applied Physics Lab",
      subjectCode: "DPH002A",
      fileNamingFormatName: "APPLIEDPHYSICSLAB",
    },
    {
      subjectName: "Engineering Graphics-Auto Cad",
      subjectCode: "DME001A",
      fileNamingFormatName: "ENGINEERINGGRAPHICSAUTOCAD",
    },
    {
      subjectName: "Computer Programming in C++ Lab",
      subjectCode: "DCO02A",
      fileNamingFormatName: "C++LAB",
    },
    {
      subjectName: "Environmental Sciences",
      subjectCode: "DCH001A",
      fileNamingFormatName: "ENVIRONMENTALSCIENCES",
    },
    {
      subjectName: "Indian Constitution",
      subjectCode: "DLW001A",
      fileNamingFormatName: "INDIANCONSTITUTION",
    },
  ];

  // Semester 2
  const btechSubjectsSem2 = [
    {
      subjectName: "Professional Skills",
      subjectCode: "DEN002A",
      fileNamingFormatName: "PROFESSIONALSKILLS",
    },
    {
      subjectName: "Engineering Mathematics-II",
      subjectCode: "DMA002A",
      fileNamingFormatName: "ENGINEERINGMATHEMATICSEM2",
    },
    {
      subjectName: "Basic Electrical Engineering",
      subjectCode: "DEL001A",
      fileNamingFormatName: "BASICELECTRICALENGINEERING",
    },
    {
      subjectName: "Programming in Java",
      subjectCode: "DCO002A",
      fileNamingFormatName: "PROGRAMMINGINJAVA",
    },
    {
      subjectName: "Engineering Chemistry",
      subjectCode: "DCH002A",
      fileNamingFormatName: "ENGINEERINGCHEMISTRY",
    },
    {
      subjectName: "Chemistry Lab",
      subjectCode: "DCH003A",
      fileNamingFormatName: "CHEMISTRYLAB",
    },
    {
      subjectName: "Engineering Workshop",
      subjectCode: "SET001A",
      fileNamingFormatName: "ENGINEERINGWORKSHOP",
    },
    {
      subjectName: "Environmental Sciences",
      subjectCode: "DCH001A",
      fileNamingFormatName: "ENVIRONMENTALSCIENCES",
    },
    {
      subjectName: "Indian Constitution",
      subjectCode: "DLW001A",
      fileNamingFormatName: "INDIANCONSTITUTION",
    },
  ];

  // Semester 3
  const btechSubjectsSem3 = [
    {
      subjectName: "Computer Networks",
      subjectCode: "BCO011A",
      fileNamingFormatName: "COMPUTERNETWORKS",
    },
    {
      subjectName: "Data Structures and Algorithms",
      subjectCode: "BCO002B",
      fileNamingFormatName: "DATASTRUCTURESANDALGORITHMS",
    },
    {
      subjectName: "Discrete Mathematics",
      subjectCode: "BAS007B",
      fileNamingFormatName: "DISCRETEMATHEMATICS",
    },
    {
      subjectName: "Operating Systems",
      subjectCode: "BCO008B",
      fileNamingFormatName: "OPERATINGSYSTEMS",
    },
    {
      subjectName: "Software Engineering and Project Management",
      subjectCode: "BCO232A",
      fileNamingFormatName: "SOFTWAREENGINEERINGANDPROJECTMANAGEMENT",
    },
    {
      subjectName: "Life Skills - 1 (Personality Development)",
      subjectCode: "DEN003A",
      fileNamingFormatName: "LIFESKILLS1",
    },
  ];

  // Semester 4
  const btechSubjectsSem4 = [
    {
      subjectName: "Computer Organization and Design",
      subjectCode: "BCO009B",
      fileNamingFormatName: "COMPUTERORGANIZATIONANDDESIGN",
    },
    {
      subjectName: "Database Management Systems",
      subjectCode: "BCO010C",
      fileNamingFormatName: "DATABASEMANAGEMENTSYSTEMS",
    },
    {
      subjectName: "Life Skills - 2 (Aptitude)",
      subjectCode: "DMA003A",
      fileNamingFormatName: "LIFESKILLS2",
    },
    {
      subjectName: "Department Elective 1 (GCCF/SalesForce)",
      subjectCode: "NEX0008",
      fileNamingFormatName: "GCCFDEPARTMENTELECTIVE1",
    },
    {
      subjectName: "Python Programming",
      subjectCode: "BCO081A",
      fileNamingFormatName: "PYTHONPROGRAMMING",
    },
    { subjectName: "Open Elective", subjectCode: "OPENELECTIVE" },
  ];

  // Semester 5
  const btechSubjectsSem5 = [
    {
      subjectName: "Formal Languages & Automation Theory",
      subjectCode: "BCO017A",
      fileNamingFormatName: "FORMALLANGUAGESANDAUTOMATIONTHEORY",
    },
    {
      subjectName: "Design & Analysis of Algorithms",
      subjectCode: "BCO023A",
      fileNamingFormatName: "DESIGNANDANALYSISOFALGORITHMS",
    },
    {
      subjectName: "Computer Graphics",
      subjectCode: "BCO007A",
      fileNamingFormatName: "COMPUTERGRAPHICS",
    },
    {
      subjectName: "Department Elective 2",
      subjectCode: "NEX0001",
      fileNamingFormatName: "AIDEPARTMENTELECTIVE2",
    },
    {
      subjectName: "Department Elective 2",
      subjectCode: "NEX0002",
      fileNamingFormatName: "GCRPDEPARTMENTALELECTIVE2",
    },
    {
      subjectName: "Advance JAVA",
      subjectCode: "BCO037B",
      fileNamingFormatName: "ADVANCEJAVA",
    },
  ];

  // Semester 6
  const btechSubjectsSem6 = [
    {
      subjectName: "Compiler Construction",
      subjectCode: "BCO028A",
      fileNamingFormatName: "COMPILERCONSTRUCTION",
    },
    {
      subjectName: "Department Elective 4",
      subjectCode: "NEX0003",
      fileNamingFormatName: "DEPARTMENTELECTIVE4",
    },
    {
      subjectName: "Department Elective 5",
      subjectCode: "NEX0004",
      fileNamingFormatName: "DEPARTMENTELECTIVE5",
    },
    {
      subjectName: "Minor Project",
      subjectCode: "BCO074B",
      fileNamingFormatName: "MINORPROJECT",
    },
  ];

  // Semester 7
  const btechSubjectsSem7 = [
    {
      subjectName: "Department Elective 6",
      subjectCode: "NEX0005",
      fileNamingFormatName: "DEPARTMENTELECTIVE6",
    },
    {
      subjectName: "Department Elective 7",
      subjectCode: "NEX0006",
      fileNamingFormatName: "DEPARTMENTELECTIVE7",
    },
  ];
  // Semester 8
  const btechSubjectsSem8 = [
    {
      subjectName: "Industrial Project/Dissertation",
      subjectCode: "BCO034B",
      fileNamingFormatName: "INDUSTRIALPROJECTORDISSERTATION",
    },
  ];

  // BCA

  // Semester 1
  const bcaSubjectsSem1 = [
    {
      subjectName: "Operating System",
      subjectCode: "BCA201",
      fileNamingFormatName: "OPERATINGSYSTEM",
    },
    {
      subjectName: "Programming in C",
      subjectCode: "BCA202",
      fileNamingFormatName: "PROGRAMMINGINC",
    },
    {
      subjectName: "Computational Thinking and Problem Solving",
      subjectCode: "BCA204",
      fileNamingFormatName: "COMPUTATIONALTHINKINGANDPROBLEMSOLVING",
    },
    {
      subjectName: "Communication Skills",
      subjectCode: "NEX0010",
      fileNamingFormatName: "COMMUNICATIONSKILLS",
    },
  ];

  // Semester 2
  const bcaSubjectsSem2 = [
    {
      subjectName: "Database Management System",
      subjectCode: "BCA209",
      fileNamingFormatName: "DATABASEMANAGEMENTSYSTEM",
    },
    {
      subjectName: "Object-Oriented Programming using C++",
      subjectCode: "BCA210",
      fileNamingFormatName: "OBJECTORIENTEDPROGRAMMINGUSINGCPLUSPLUS",
    },
    {
      subjectName: "Environmental Studies",
      subjectCode: "NEX0011",
      fileNamingFormatName: "ENVIRONMENTALSTUDIES",
    },
    {
      subjectName: "Culture Education-II",
      subjectCode: "NEX0012",
      fileNamingFormatName: "CULTUREEDUCATION2",
    },
    {
      subjectName: "Professional Skills",
      subjectCode: "NEX0013",
      fileNamingFormatName: "PROFESSIONALSKILLS",
    },
    {
      subjectName: "Open Elective-I",
      subjectCode: "NEX0014",
      fileNamingFormatName: "OPENELECTIVE1",
    },
  ];

  // HOTEL MANAGEMENT

  // Semester 1
  const hotelManagementSubjectsSem1 = [
    {
      subjectName: "Foundation Course of Food Production-I",
      subjectCode: "BHH101C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFFOODPRODUCTION1",
    },
    {
      subjectName: "Foundation Course of Food & Beverage Service-I",
      subjectCode: "BHH102C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFFOODANDBEVERAGESERVICE1",
    },
    {
      subjectName: "Foundation Course of Accommodation Operations-I",
      subjectCode: "BHH103C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFACCOMMODATIONOPERATIONS1",
    },
    {
      subjectName: "Foundation Course of Front Office Operations-I",
      subjectCode: "BHH104C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFFRONTOFFICEOPERATIONS1",
    },
    {
      subjectName: "Communication",
      subjectCode: "BHH105C",
      fileNamingFormatName: "COMMUNICATION",
    },
    {
      subjectName: "Basic Hygiene and HACCP",
      subjectCode: "BHH106C",
      fileNamingFormatName: "BASICHYGIENEANDHACCP",
    },
    {
      subjectName: "Environmental Studies",
      subjectCode: "BMC051A",
      fileNamingFormatName: "ENVIRONMENTALSTUDIES",
    },
  ];

  // Semester 2
  const hotelManagementSubjectsSem2 = [
    {
      subjectName: "Foundation Course of Food Production-II",
      subjectCode: "BHH201C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFFOODPRODUCTION2",
    },
    {
      subjectName: "Foundation Course of Food & Beverage Service-II",
      subjectCode: "BHH202C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFFOODANDBEVERAGESERVICE2",
    },
    {
      subjectName: "Foundation Course of Accommodation Operations-II",
      subjectCode: "BHH203C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFACCOMMODATIONOPERATIONS2",
    },
    {
      subjectName: "Foundation Course of Front Office Operations-II",
      subjectCode: "BHH204C",
      fileNamingFormatName: "FOUNDATIONCOURSEOFFRONTOFFICEOPERATIONS2",
    },
    {
      subjectName: "Application of Computer",
      subjectCode: "BHH205C",
      fileNamingFormatName: "APPLICATIONOFCOMPUTER",
    },
    {
      subjectName: "Food Science and Nutrition",
      subjectCode: "BHH206C",
      fileNamingFormatName: "FOODSCIENCEANDNUTRITION",
    },
  ];

  // Semester 3
  const hotelManagementSubjectsSem3 = [
    {
      subjectName: "Food Production Operations-1",
      subjectCode: "BHH301C",
      fileNamingFormatName: "FOODPRODUCTIONOPERATIONS1",
    },
    {
      subjectName: "Food & Beverage Service Operations-1",
      subjectCode: "BHH302C",
      fileNamingFormatName: "FOODANDBEVERAGESERVICEOPERATIONS1",
    },
    {
      subjectName: "Accommodation Operations -1",
      subjectCode: "BHH303C",
      fileNamingFormatName: "ACCOMMODATIONOPERATIONS1",
    },
    {
      subjectName: "Front Office Operations -1",
      subjectCode: "BHH304C",
      fileNamingFormatName: "FRONTOFFICEOPERATIONS1",
    },
    {
      subjectName: "Basic Accounting",
      subjectCode: "BHH305C",
      fileNamingFormatName: "BASICACCOUNTING",
    },
    {
      subjectName: "Value Education, Human Rights and Legislative Procedures",
      subjectCode: "BHH306C",
      fileNamingFormatName: "VALUEEDUCATIONHUMANRIGHTSANDLEGISLATIVEPROCEDURES",
    },
  ];

  // Semester 4
  const hotelManagementSubjectsSem4 = [
    {
      subjectName: "I.T. on Food Production",
      subjectCode: "BHH401C",
      fileNamingFormatName: "ITONFOODPRODUCTION",
    },
    {
      subjectName: "I.T. on Food & Beverage Services",
      subjectCode: "BHH402C",
      fileNamingFormatName: "ITONFOODANDBEVERAGESERVICES",
    },
    {
      subjectName: "I.T. on Accommodation Operations",
      subjectCode: "BHH403C",
      fileNamingFormatName: "ITONACCOMMODATIONOPERATIONS",
    },
    {
      subjectName: "I.T. on Front Office Operations",
      subjectCode: "BHH404C",
      fileNamingFormatName: "ITONFRONTOFFICEOPERATIONS",
    },
    {
      subjectName: "I.T. Presentation and Report",
      subjectCode: "BHH405C",
      fileNamingFormatName: "ITPRESENTATIONANDREPORT",
    },
  ];

  // Semester 5
  const hotelManagementSubjectsSem5 = [
    {
      subjectName: "Food Production Operations-II",
      subjectCode: "BHH501C",
      fileNamingFormatName: "FOODPRODUCTIONOPERATIONS2",
    },
    {
      subjectName: "Food & Beverage Service Operations-II",
      subjectCode: "BHH502C",
      fileNamingFormatName: "FOODANDBEVERAGESERVICEOPERATIONS2",
    },
    {
      subjectName: "Accommodation Operations –II",
      subjectCode: "BHH503C",
      fileNamingFormatName: "ACCOMMODATIONOPERATIONS2",
    },
    {
      subjectName: "Front Office Operations –II",
      subjectCode: "BHH504C",
      fileNamingFormatName: "FRONTOFFICEOPERATIONS2",
    },
    {
      subjectName: "Professional Skills Development",
      subjectCode: "BHH505C",
      fileNamingFormatName: "PROFESSIONALSKILLSDEVELOPMENT",
    },
    {
      subjectName: "Methods and Techniques of Research",
      subjectCode: "BHH506C",
      fileNamingFormatName: "METHODSANDTECHNIQUESOFRESEARCH",
    },
  ];

  // Semester 6
  const hotelManagementSubjectsSem6 = [
    {
      subjectName: "Food Production operations-III",
      subjectCode: "BHH601C",
      fileNamingFormatName: "FOODPRODUCTIONOPERATIONS3",
    },
    {
      subjectName: "Food & Beverage operations-III",
      subjectCode: "BHH602C",
      fileNamingFormatName: "FOODANDBEVERAGEOPERATIONS3",
    },
    {
      subjectName: "Accommodation Management",
      subjectCode: "BHH603C",
      fileNamingFormatName: "ACCOMMODATIONMANAGEMENT",
    },
    {
      subjectName: "Front Office Management",
      subjectCode: "BHH604C",
      fileNamingFormatName: "FRONTOFFICEMANAGEMENT",
    },
    {
      subjectName: "Research Project (Submission)",
      subjectCode: "BHH605C",
      fileNamingFormatName: "RESEARCHPROJECTSUBMISSION",
    },
    {
      subjectName: "Hospitality Law and Risk Management",
      subjectCode: "BHH606C",
      fileNamingFormatName: "HOSPITALITYLAWANDRISKMANAGEMENT",
    },
  ];

  //
  // BBA COURSE
  //
  // Semester 1
  const bbaSubjectsSem1 = [
    {
      subjectName: "Principles of Management",
      subjectCode: "BBA001A",
      fileNamingFormatName: "PRINCIPLESOFMANAGEMENT",
    },
    {
      subjectName: "Business Organization",
      subjectCode: "BBA002A",
      fileNamingFormatName: "BUSINESSORGANIZATION",
    },
    {
      subjectName: "Quantitative Techniques",
      subjectCode: "BBA009A",
      fileNamingFormatName: "QUANTITATIVETECHNIQUES",
    },
    {
      subjectName: "Managerial Economics",
      subjectCode: "BBA004A",
      fileNamingFormatName: "MANAGERIALECONOMICS",
    },
    {
      subjectName: "Business Communication",
      subjectCode: "BBA005A",
      fileNamingFormatName: "BUSINESSCOMMUNICATION",
    },
    {
      subjectName: "Fundamentals of Computer",
      subjectCode: "BMC001A",
      fileNamingFormatName: "FUNDAMENTALSOFComputer",
    },
    {
      subjectName: "Professional Skills 1",
      subjectCode: "BBA006B",
      fileNamingFormatName: "PROFESSIONALSKILLS1",
    },
    {
      subjectName: "Environmental Studies",
      subjectCode: "BMC051A",
      fileNamingFormatName: "ENVIRONMENTALSTUDIES",
    },
  ];

  // Semester 2
  const bbaSubjectsSem2 = [
    {
      subjectName: "Organization Behavior",
      subjectCode: "BBA007B",
      fileNamingFormatName: "ORGANIZATIONBEHAVIOR",
    },
    {
      subjectName: "Accounting for Managers",
      subjectCode: "BBA101A",
      fileNamingFormatName: "ACCOUNTINGFORMANAGERS",
    },
    {
      subjectName: "Principles of Marketing Management",
      subjectCode: "BBA161A",
      fileNamingFormatName: "PRINCIPLESOFMARKETINGMANAGEMENT",
    },
    {
      subjectName: "Human Resource Management",
      subjectCode: "BBA191B",
      fileNamingFormatName: "HUMANRESOURCEMANAGEMENT",
    },
    {
      subjectName: "Financial Management",
      subjectCode: "BBA102A",
      fileNamingFormatName: "FINANCIALMANAGEMENT",
    },
    {
      subjectName: "Macro Economics & Global Environment",
      subjectCode: "BBA008A",
      fileNamingFormatName: "MACROECONOMICSANDGLOBALENVIRONMENT",
    },
    {
      subjectName: "Operation Research",
      subjectCode: "BBA432A",
      fileNamingFormatName: "OPERATIONRESEARCH",
    },
    {
      subjectName: "Computer Applications 2 Advanced MS Excel",
      subjectCode: "BMC003A",
      fileNamingFormatName: "COMPUTERAPPLICATIONS2ADVANCEDMSEXCEL",
    },
    {
      subjectName: "Professional Skills 2",
      subjectCode: "BBA010B",
      fileNamingFormatName: "PROFESSIONALSKILLS2",
    },
  ];

  // Semester 3
  const bbaSubjectsSem3 = [
    {
      subjectName: "E-entrepreneurship",
      subjectCode: "BBA311A",
      fileNamingFormatName: "EENTREPRENEURSHIP",
    },
    {
      subjectName: "Financial Markets & Services",
      subjectCode: "BBA341A",
      fileNamingFormatName: "FINANCIALMARKETSANDSERVICES",
    },
    {
      subjectName: "Research Methodology",
      subjectCode: "BBA011A",
      fileNamingFormatName: "RESEARCHMETHODOLOGY",
    },
    {
      subjectName: "International Trade & Finance",
      subjectCode: "BBA012B",
      fileNamingFormatName: "INTERNATIONALTRADEANDFINANCE",
    },
    {
      subjectName: "Human Resource Development",
      subjectCode: "BBA192A",
      fileNamingFormatName: "HUMANRESOURCEDEVELOPMENT",
    },
    {
      subjectName: "Computer Applications 3 MS Project",
      subjectCode: "BMC004A",
      fileNamingFormatName: "COMPUTERAPPLICATIONS3MSPROJECT",
    },
    {
      subjectName: "Open Elective BCA Sem 3",
      subjectCode: "NEX0015",
      fileNamingFormatName: "OPENELECTIVEBCASEM3",
    },
  ];

  // Semester 4
  const bbaSubjectsSem4 = [
    {
      subjectName: "Employee Relationship Management",
      subjectCode: "BBA404A",
      fileNamingFormatName: "EMPLOYEERELATIONSHIPMANAGEMENT",
    },
    {
      subjectName: "Cost & Management Accounting",
      subjectCode: "BBA103A",
      fileNamingFormatName: "COSTANDMANAGEMENTACCOUNTING",
    },
    {
      subjectName: "Corporate Finance",
      subjectCode: "BBA104A",
      fileNamingFormatName: "CORPORATEFINANCE",
    },
    {
      subjectName: "Operation Management",
      subjectCode: "BBA431A",
      fileNamingFormatName: "OPERATIONMANAGEMENT",
    },
    {
      subjectName: "Business Environment",
      subjectCode: "BBA014A",
      fileNamingFormatName: "BUSINESSENVIRONMENT",
    },
    {
      subjectName: "Computer Applications 4 Web Designing",
      subjectCode: "BMC005A",
      fileNamingFormatName: "COMPUTERAPPLICATIONS4WEBDESIGNING",
    },
    {
      subjectName: "Corporate Governance and Social Responsibility",
      subjectCode: "BCM002A",
      fileNamingFormatName: "CORPORATEGOVERNANCEANDSOCIALRESPONSIBILITY",
    },
    {
      subjectName: "Open Elective",
      subjectCode: "NEX0016",
      fileNamingFormatName: "OPENELECTIVE",
    },
  ];

  // Semester 5
  const bbaSubjectsSem5 = [
    {
      subjectName: "International Business Management",
      subjectCode: "BBA251A",
      fileNamingFormatName: "INTERNATIONALBUSINESSMANAGEMENT",
    },
    {
      subjectName: "Legal Environment for Business",
      subjectCode: "BBA016A",
      fileNamingFormatName: "LEGALENVIRONMENTFORBUSINESS",
    },
    {
      subjectName: "Investment & Risk Management",
      subjectCode: "BBA105A",
      fileNamingFormatName: "INVESTMENTANDRISKMANAGEMENT",
    },
    {
      subjectName: "Corporate Strategy",
      subjectCode: "BBA017A",
      fileNamingFormatName: "CORPORATESTRATEGY",
    },
    {
      subjectName: "Program Elective 1",
      subjectCode: "NEX0017",
      fileNamingFormatName: "PROGRAMELECTIVE1",
    },
    {
      subjectName: "Professional Skills 5",
      subjectCode: "BBA018B",
      fileNamingFormatName: "PROFESSIONALSKILLS5",
    },
    {
      subjectName: "Summer Training",
      subjectCode: "BBA997A",
      fileNamingFormatName: "SUMMERTRAINING",
    },
  ];

  // Semester 6
  const bbaSubjectsSem6 = [
    {
      subjectName: "Customer Relationship Management",
      subjectCode: "BBA162A",
      fileNamingFormatName: "CUSTOMERRELATIONSHIPMANAGEMENT",
    },
    {
      subjectName: "E-Commerce",
      subjectCode: "BBA019A",
      fileNamingFormatName: "ECOMMERCE",
    },
    {
      subjectName: "Project Management",
      subjectCode: "BBA020A",
      fileNamingFormatName: "PROJECTMANAGEMENT",
    },
    {
      subjectName: "Leadership Skills",
      subjectCode: "BBA194A",
      fileNamingFormatName: "LEADERSHIPS",
    },
    {
      subjectName: "Professional Skills 6",
      subjectCode: "BBA022B",
      fileNamingFormatName: "PROFESSIONALSKILLS6",
    },
    {
      subjectName: "Program Elective 2",
      subjectCode: "NEX0018",
      fileNamingFormatName: "PROGRAMELECTIVE2",
    },
    {
      subjectName: "Project Work",
      subjectCode: "BBA998A",
      fileNamingFormatName: "PROJECTWORK",
    },
  ];
  //
  // BA PSYCHOLOGY HONS.
  // Semester 1
  const baPsychologyHonsSem1 = [
    {
      subjectName: "Introduction To Psychology",
      subjectCode: "BPS001C",
      fileNamingFormatName: "INTRODUCTIONTOPSYCHOLOGY",
    },
    {
      subjectName: "Social Psychology 1",
      subjectCode: "BPS002C",
      fileNamingFormatName: "SOCIALPSYCHOLOGY1",
    },
    {
      subjectName: "Statistical Methods For Psychology",
      subjectCode: "BPS003D",
      fileNamingFormatName: "STATISTICALMETHODSFORPSYCHOLOGY",
    },
  ];

  // Semester 2
  const baPsychologyHonsSem2 = [
    {
      subjectName: "Biological Basis Of Behaviour",
      subjectCode: "BPS004C",
      fileNamingFormatName: "BIOLOGICALBASISOFBEHAVIOUR",
    },
    {
      subjectName: "Human Development And Pedagogy",
      subjectCode: "BPS005D",
      fileNamingFormatName: "HUMANDEVELOPMENTANDPEDAGOGY",
    },
    {
      subjectName: "Basics Of Psychopathology",
      subjectCode: "BPS006C",
      fileNamingFormatName: "BASICSOFPSYCHOPATHOLOGY",
    },
    {
      subjectName: "Introduction To Positive Psychology",
      subjectCode: "BPS024C",
      fileNamingFormatName: "INTRODUCTIONTOPOSITIVEPSYCHOLOGY",
    },
    {
      subjectName: "Gender & Identity",
      subjectCode: "BPS030C",
      fileNamingFormatName: "GENDERANDIDENTITY",
    },
    {
      subjectName: "Introduction To Indian Psychology",
      subjectCode: "BPS036C",
      fileNamingFormatName: "INTRODUCTIONTOINDIANPSYCHOLOGY",
    },
    {
      subjectName: "Psychology Of Media",
      subjectCode: "BPS042C",
      fileNamingFormatName: "PSYCHOLOGYOFMEDIA",
    },
  ];

  // Semester 3
  const baPsychologyHonsSem3 = [
    {
      subjectName: "Research Methods In Psychology",
      subjectCode: "BPS007D",
      fileNamingFormatName: "RESEARCHMETHODSINPSYCHOLOGY",
    },
    {
      subjectName: "Fundamentals Of Cognitive Psychology",
      subjectCode: "BPS008C",
      fileNamingFormatName: "FUNDAMENTALSOFCOGNITIVEPSYCHOLOGY",
    },
    {
      subjectName: "Positive Psychology Approaches And Models",
      subjectCode: "BPS025C",
      fileNamingFormatName: "POSITIVEPSYCHOLOGYAPPROACHESANDMODELS",
    },
    {
      subjectName: "Gender Diversity And Inclusion (LGBTQIA+)",
      subjectCode: "BPS031C",
      fileNamingFormatName: "GENDERDIVERSITYANDINCLUSION",
    },
    {
      subjectName: "Understanding Self & Personality In Indian Perspective",
      subjectCode: "BPS037C",
      fileNamingFormatName: "UNDERSTANDINGSELFANDPERSONALITY",
    },
    {
      subjectName: "Community & Rehabilitation",
      subjectCode: "BPS043C",
      fileNamingFormatName: "COMMUNITYANDREHABILITATION",
    },
  ];

  // Semester 4
  const baPsychologyHonsSem4 = [
    {
      subjectName: "Counseling And Therapies",
      subjectCode: "BPS009C",
      fileNamingFormatName: "COUNSELINGANDTHERAPIES",
    },
    {
      subjectName: "Social Psychology-2",
      subjectCode: "BPS010C",
      fileNamingFormatName: "SOCIALPSYCHOLOGY2",
    },
    {
      subjectName: "Self Knowledge Values Character Strengths Researches",
      subjectCode: "BPS26C",
      fileNamingFormatName: "SELFKNOWLEDGEVALUESCHARACTERSTRENGTHS",
    },
    {
      subjectName: "Gender And Mental Health",
      subjectCode: "BPS032C",
      fileNamingFormatName: "GENDERANDMENTALHEALTH",
    },
    {
      subjectName: "Cognition And Self Perception",
      subjectCode: "BPS038C",
      fileNamingFormatName: "COGNITIONANDSELFPERCEPTION",
    },
    {
      subjectName: "Psychology Of Peace",
      subjectCode: "BPS044C",
      fileNamingFormatName: "PSYCHOLOGYOFPEACE",
    },
  ];

  // Semester 5
  const baPsychologyHonsSem5 = [
    {
      subjectName: "Work And Organisational Psychology",
      subjectCode: "BPS011C",
      fileNamingFormatName: "WORKANDORGANISATIONALPSYCHOLOGY",
    },
    {
      subjectName: "Happiness Meaning In Life",
      subjectCode: "BPS027C",
      fileNamingFormatName: "HAPPINESSANDMEANINGINLIFE",
    },
    {
      subjectName: "Gender Based Violence And Discrimination",
      subjectCode: "BPS033C",
      fileNamingFormatName: "GENDERBASEDVIOLENCEANDDISCRIMINATION",
    },
    {
      subjectName: "Ancient Texts Psychology",
      subjectCode: "BPS039C",
      fileNamingFormatName: "ANCIENTTEXTSPSYCHOLOGY",
    },
    {
      subjectName: "Psychology Of Creativity",
      subjectCode: "BPS045C",
      fileNamingFormatName: "PSYCHOLOGYOFCREATIVITY",
    },
    {
      subjectName: "Mindfulness",
      subjectCode: "BPS028C",
      fileNamingFormatName: "MINDFULNESS",
    },
    {
      subjectName: "Social Change Gender Issues And Intervention",
      subjectCode: "BPS034C",
      fileNamingFormatName: "SOCIALCHANGEGENDERISSUES",
    },
    {
      subjectName: "Researches In Indian Psychology",
      subjectCode: "BPS040C",
      fileNamingFormatName: "RESEARCHESININDIANPSYCHOLOGY",
    },
    {
      subjectName: "Educational Psychology",
      subjectCode: "BPS46C",
      fileNamingFormatName: "EDUCATIONALPSYCHOLOGY",
    },
  ];

  // Semester 6
  const baPsychologyHonsSem6 = [
    {
      subjectName: "Fundamentals Of Clinical Psychology",
      subjectCode: "BPS012C",
      fileNamingFormatName: "FUNDAMENTALSOFCLINICALPSYCHOLOGY",
    },
    {
      subjectName: "Adaptive Resilience Well Being",
      subjectCode: "BPS029C",
      fileNamingFormatName: "ADAPTIVERESILIENCEWELLBEING",
    },
    {
      subjectName: "Gender Issues Researches",
      subjectCode: "BPS035C",
      fileNamingFormatName: "GENDERISSUESRESEARCHES",
    },
    {
      subjectName: "Indian Psychology And Its Applications",
      subjectCode: "BPS041C",
      fileNamingFormatName: "INDIANPSYCHOLOGYANDAPPLICATIONS",
    },
    {
      subjectName: "Psychology Health",
      subjectCode: "BPS47C",
      fileNamingFormatName: "PSYCHOLOGYHEALTH",
    },
  ];

  //
  // Section End
  //
  //New Section Start
  //
  const subjectOptionsMap = {
    BTech: [
      btechSubjectsSem1,
      btechSubjectsSem2,
      btechSubjectsSem3,
      btechSubjectsSem4,
      btechSubjectsSem5,
      btechSubjectsSem6,
      btechSubjectsSem7,
      btechSubjectsSem8,
    ],
    BBA: [
      bbaSubjectsSem1,
      bbaSubjectsSem2,
      bbaSubjectsSem3,
      bbaSubjectsSem4,
      bbaSubjectsSem5,
      bbaSubjectsSem6,
    ],
    BCA: [bcaSubjectsSem1, bcaSubjectsSem2],
    Humanities: [
      btechSubjectsSem1,
      btechSubjectsSem2,
      btechSubjectsSem3,
      btechSubjectsSem4,
      btechSubjectsSem5,
      btechSubjectsSem6,
      btechSubjectsSem7,
      btechSubjectsSem8,
    ],
    Hospitality: [
      btechSubjectsSem1,
      btechSubjectsSem2,
      btechSubjectsSem3,
      btechSubjectsSem4,
      btechSubjectsSem5,
      btechSubjectsSem6,
      btechSubjectsSem7,
      btechSubjectsSem8,
    ],
    Law: [
      btechSubjectsSem1,
      btechSubjectsSem2,
      btechSubjectsSem3,
      btechSubjectsSem4,
      btechSubjectsSem5,
      btechSubjectsSem6,
      btechSubjectsSem7,
      btechSubjectsSem8,
    ],
    "Hotel Management": [
      hotelManagementSubjectsSem1,
      hotelManagementSubjectsSem2,
      hotelManagementSubjectsSem3,
      hotelManagementSubjectsSem4,
      hotelManagementSubjectsSem5,
      hotelManagementSubjectsSem6,
    ],
    "BA Hons. Psychology": [
      baPsychologyHonsSem1,
      baPsychologyHonsSem2,
      baPsychologyHonsSem3,
      baPsychologyHonsSem4,
      baPsychologyHonsSem5,
      baPsychologyHonsSem6,
    ],
  };

  const updateSubjectOptions = () => {
    const selectedOptions = subjectOptionsMap[courseName];

    if (
      selectedOptions &&
      selectedSem >= 1 &&
      selectedSem <= selectedOptions.length
    ) {
      setSubjectOptions(selectedOptions[selectedSem - 1]);
    }
  };
  //
  //
  //
  //
  //
  const host = "https://naughty-lion-train.cyclic.app";
  // "http://localhost:3001" ||
  // api call to fetch files information from backend.
  async function fetchFiles(subjectCode) {
    console.log(subjectCode);
    setLoading(true);
    setTimeout(async () => {
      let url = `https://naughty-lion-train.cyclic.app/edgerunners/junexus/fetchfileinfo/${selectedCategory}/${courseName}/${selectedSem}/${subjectCode}`;
      console.log(url);
      const response = await fetch(url, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      setState(json);
      setLoading(false);
    }, 500);
  }

  // ADDING FILE INFO TO DB
  async function addFiles() {
    let url = `https://naughty-lion-train.cyclic.app/edgerunners/junexus/addfileinfo`;
    console.log("run");
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(uploadInfo),
    });
    console.log("run");
    const json = await response.json();

    setState(json);
    return json;
  }

  // const addFileInfo = (
  //   fileName,
  //   examName,
  //   course,
  //   semester,
  //   year,
  //   fileUrl,
  //   fileDownloadUrl
  // ) => {};

  return (
    <NoteContext.Provider
      value={{
        setCourseName,
        setUploadInfo,
        fetchFiles,
        addFiles,
        setSelectedCategory,
        setSelectedSem,
        setLoading,
        setSectionHeading,
        updateSubjectOptions,

        setHomePageNavbarVisibility,
        setSubjectsReload,
        selectedSubject,
        setSelectedSubject,
        subjectsReload,
        inputEmailId,
        setInputEmailId,
        host,
        setEmailIdVerifiedMessageVisibility,
        emailIdVerifiedMessageVisibility,
        subjectOptionsMap,
        homePageNavbarVisibility,
        subjectOptions,
        selectedSem,
        loading,
        sectionHeading,
        state,
        courseName,
        semesterOptions,
        courseOptions,
        uploadInfo,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
