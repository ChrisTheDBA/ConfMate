var schedule = [
  {
    "location": "251+257+258",
    "starting_at": 1367254800000,
    "ending_at": 1367259300000,
    "title": "Morning announcements and opening keynote",
    "description": "David Heinemeier Hansson",
    "speaker": {
      "name": "David Heinemeier Hansson"
    }
  },
  {
    "description": "<p>Ever wondered what Rails is doing behind the scenes? What happens to an HTTP request after it leaves your browser? How does Rails process the response?</p><p>In this beginner talk, Aimee Simone and Christopher Greene break down the request/response cycle of a web application, navigating through the magestic internals of Rails. We'll outline the responsibilities of each Rails component, including its MVC framework and RESTful routing concepts. By following the flow from a client HTTP request to a completed server response, you'll gain a better understanding of the anatomy of a Rails application.</p>",
    "title": "How a Request Becomes a Response",
    "speaker": {
      "name": "Christopher Greene & Aimee Simone",
      "description": "<p>Aimee Simone is a Ruby on Rails developer, people-wrangler, and content creator for Code School. When not building the interwebs, she spends her time practicing yoga, running, blogging, podcasting, and snuggling with her dog, Zoe. Aimee also contributes to the growing Orlando tech community by volunteering with Rails Bridge and heading up Central FL Women in Tech.</p>"
    },
    "location": "Intro",
    "starting_at": 1367260200000,
    "ending_at": 1367262600000
  },
  {
    "description": "<p>My team and I were brought into The Companyâ„¢ to help them take their One Big Monolithic Rails Appâ„¢ and turn it into a a handful of smaller Rails apps that all work togetherâ€¦ mumble mumble SOA mumble mumble.</p><p>When I started looking at it, I realized that 4 or 5 apps was only just scratching the surface. Instead of 5 apps, 1 for each product with a multi-tenant database, we've decided on 1 app per client, with NO multi-tenant database.</p><p>We have a few internal admin apps, then a whole slew of client apps. Each client has an admin app, a deployer app (to deploy the client admin), and n apps per client that are end-user facing.</p><p>- company admin apps:\n<br/>\t- client admin deployer:\n<br/>\t- client admin:\n<br/>\t\t- end user site\n<br/>\t\t- end user site\n<br/>\t\t- end user site\n<br/>\t\t- â€¦</p><p>It's the classic Rails app story. Built in 2007 and piled onto for 6 years. Lotsa of version bumps and upgrades, but never any serious refactor. It's grown and grown. Clients have grown and grown. The technical requirements and cost of operating has grown and grown.</p><p>By doing this re-architecting we've reduced:\n<br/>- the technical complexity of each app (each piece of the previous one big app)\n<br/>- the resource requirements of each app\n<br/>- the cost of operation</p><p>â€¦considerably.</p><p>Oh, and we're doing all PULL (no push) and HTML with microformats as \"API output\" (no JSON).</p><p>Those three things (lots of little apps, pull, html) are changing everything for us. </p>",
    "title": "The Constellation Architecture â€” All the Little Apps",
    "speaker": {
      "name": "Shane Becker",
      "description": "<p>Shane is still vegan, still straightedge. Starting in the Mosaic days and for over half of his life he has been making websites for fun and for profit. The shipping of Rails 1.0 and the 15 minute blog screencast initiated his love affair with Ruby. Through building websites, designing logos, tshirts and stickers he has contributed to many open source projects (Rubinius, Nokogiri, JRuby, Cloud Foundry, et al). </p><p>Shane can currently be found working as a Mr Managerâ„¢ of a small software team that gives away ~80% of its work as open source. Shane loves HTML and microformats. Mumble mumble services, feeds and pull. Shane lives at The Farmhouse in Hollywood, CA and runs Farmhouse Conf.</p>"
    },
    "location": "254",
    "starting_at": 1367260200000,
    "ending_at": 1367262600000
  },
  {
    "description": "<p>Tobias Lutke wrote the first line of code for Shopify nearly 10 years ago to power his own Snowboard shop. Two years later Shopify launched to the public on a single webserver using Rails 0.13.1. Today Shopify powers over 40k online stores and processes up to half a million product sales per day across the platform. Over 30 people actively work on Shopify which makes it the longest developed and likely largest Rails code base out there.</p><p>This is the story of how Shopify has evolved to handle its immense growth over the years. This is what getting big is all about: evolving to meet the needs of your customers. You don't start out with a system and infrastructure that can handle a billion dollar in GMV. You evolve to it. You evolve by adding caching layers, hardware, queuing systems and splitting your application to services.</p><p>This is the story of how we have tackled the various scaling pain points that Shopify has hit and what we have done to surpass them, what we are doing to go even further.</p>",
    "title": "How Shopify Scales Rails",
    "speaker": {
      "name": "John Duff",
      "description": "<p>John has been writing software, professionally, for over 7 years now with a good portion of that time spent working on Rails applications. Across various Canadian startups John has worked with versions of Rails from 1.2.x to the current 3.1.x releases on everything from social video sites, to patient management applications for hospitals and now e-commerce.</p><p>He eventually found his way to Shopify where he has been involved in developing features, working on performance, managing teams, overall product direction and anything else he can get his hands into. In two short years John has gotten to know the Shopify codebase and architecture inside and out, becoming one of the go to people within the company.</p>"
    },
    "location": "252+253",
    "starting_at": 1367260200000,
    "ending_at": 1367262600000
  },
  {
    "description": "<p>Long-running branches are painful, but upgrading to Rails 3 requires one if you can't stop development, right? Wrong! At New Relic, we worked on upgrading to Rails 3 on master while letting development continue in Rails 2. We patched Bundler, built a backwards-compatible boot sequence, and punched ActiveScaffold in the face. Other developers, meanwhile, released 1400 commits worth of work without noticing any changes. Weâ€™ll talk about what we did, why we did it, and why we think this approach can help developers get over the hurdle into the Rails 3 promised land.</p>",
    "title": "Changing the wheels on the bus at 80 mph: upgrading to Rails 3 on an active master branch",
    "speaker": {
      "name": "Andrew Bloomgarden and Julian Giuca",
      "description": "<p>Andrew Bloomgarden (@aughr) works on the Core App at New Relic. Like a surprising number of people he works with, he speaks Japanese (though not as well as he used to) and has lived in Japan for a time. A recent graduate of Dartmouth College, he lives in Portland with his girlfriend.</p><p>Julian Giuca. Rails dev, 6 years. 4 years Mobile Web experience. Embedded Systems background. Australian.\n</p>"
    },
    "location": "255",
    "starting_at": 1367260200000,
    "ending_at": 1367262600000
  },
  {
    "description": "<p>Unwieldy templates (a.k.a. views) are all too common in Rails apps, even among teams that otherwise craft high-quality code. Being brought into or having to maintain a project with poorly-crafted templates leads to extreme frustration and less than-adequite-velocity. At philosophie, we have started to use a few simple patterns that result in templates that are easier to maintain. By investing a small amount of time up-front learning and applying these patterns we have saved countless hours in the long run.</p><p>Topics include:\n<br/>* The Decorator Pattern\n<br/>* Using View objects\n<br/>* Sanely building forms\n<br/>* And more!</p>",
    "title": "Maintainable Templates",
    "speaker": {
      "name": "Brendan Loudermilk",
      "description": "<p>Brendan Loudermilk is a web developer from Los Angeles with a passion for software design and development, small business, and skateboarding (among other things). He has been programming for 10 years and working with Rails for the last four. Brendan is currently employed at philosophie, where he makes websites with Rails ranging from small marketing apps to large-scale enterprise software.</p>"
    },
    "uid": "talk-13",
    "location": "255",
    "starting_at": 1367263200000,
    "ending_at": 1367265600000
  },
  {
    "description": "<p>Why do we all know a developer who has been pounding out unmaintainable code for a decade or more? Why do people \"believe in TDD but I don't have time to write tests during crunch?\"  How is it that we have an entire industry based around rescuing teams from acutely awful Rails apps? </p><p>It's because on the job experience is a poor teacher; plateauing as soon as the developer is able to ship code that meets requirements. Schools teach Computer Science which is only tangentially related to being a developer and most kata's are approached incorrectly, giving no value at best, and reinforcing poor practices at worst. On top of all this, our pairs (for the lucky ones who pair program) probably have not shown us anything new in months.</p><p>This presentation will give specific, concrete steps on how to slowly and steadily improve our game through practice and hard work. I'll identify what skill Rails developers should be focusing on and walk the audience through how to target and eliminate these weaknesses so that nothing but white hot joy streams out of our fingers and into our apps. There's no magic here, no secrets, and no hacks; just you and me working our butts off until we suck a little less.</p>",
    "title": "Nobody will Train You but You",
    "speaker": {
      "name": "Zach Briggs",
      "description": "<p>Zach Briggs is Double Agent 005 with Test Double. His first Rails app was written in early June of 2012 with no prior professional IT experience. By August 20th 2012 he was employed full time slinging Ruby and JavaScript. He contributes to open source, bakes, smokes meats, is a cyclist, and lives in Columbus OH with a wife he doesn't deserve.</p>"
    },
    "uid": "talk-3",
    "location": "252+253",
    "starting_at": 1367263200000,
    "ending_at": 1367265600000
  },
  {
    "location": "Intro",
    "starting_at": 1367263200000,
    "ending_at": 1367265600000,
    "title": "Rails for Zombies: Parts 1 & 2",
    "description": "Christopher Greene & Aimee Simone",
    "speaker": {
      "name": "Christopher Greene & Aimee Simone"
    },
    "uid": "Ra1367263200000"
  },
  {
    "description": "<p>Building a web app consists of stressful choices.  Should the signup button be red or blue?  Does my site's sales pitch sound awkward? What will the user think about my site the first five seconds they visit?</p><p>Using Rails and Amazon's Mechanical Turk service, I will show you how you can perform usability tests, A/B testing and gain valuable feedback on your site BEFORE launching your app to a single real user. </p><p>I'll walk you through :</p><p>1) Sample code for quickly integrating your Rails site with Mechanical Turk</p><p>2) How to structure your HITs (Human Intelligence Tasks) so that you solicit detailed feedback from the workers.</p><p>3) Integrating A/B testing so that you can quickly decide which design component is better</p><p>4) Tactics for stopping automated bots from ruining your usability tests</p>",
    "title": "No Traffic, No Users, No Problem! - Usability Testing for New Apps",
    "speaker": {
      "name": "Jim Jones",
      "description": "<p>I'm a software engineer of 14+ years residing in San Francisco with my wife and dog Putzi.  I'm currently working as a consultant with Manilla.com.</p>"
    },
    "uid": "talk-51",
    "location": "254",
    "starting_at": 1367263200000,
    "ending_at": 1367265600000
  },
  {
    "location": "",
    "starting_at": 1367265600000,
    "ending_at": 1367269200000,
    "title": "Lunch",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Lu1367265600000"
  },
  {
    "description": "<p>Do you have to look at Rails models with 2500 lines of code? Or 200 line methods loaded with iterators, conditionals and instance variables? Not only you, even the code author does not understand what's going on in there.</p><p>I'll show you how you can craft simple and beautiful Rails application by adopting functional programming inspired ideas. Say goodbye to the mess you have by constructing tiny classes and functions that you can use to build up a complex system.</p>",
    "title": "Simple and Elegant Rails Code with Functional Style",
    "speaker": {
      "name": "Attila Domokos",
      "description": "<p>Attila Domokos is a software engineer at a Cleveland, OH based startup. He has been involved with software development for 12 years and has strong focus on code quality and testing. He spent 7 years in the Microsoft space but switched to developing Ruby on Rails applications two years ago. You can find him in Cleveland organizing the Saturday afternoon Hackibou sessions where developers get together to practice and learn from each other. Attila enjoys music and plays the ukulele with his son when he is not around the computer.</p>"
    },
    "uid": "talk-50",
    "location": "254",
    "starting_at": 1367269200000,
    "ending_at": 1367271600000
  },
  {
    "description": "<p>Behavior-Driven Development and Acceptance Testing are heavily intertwined and in many aspects are one and the same. Both focus on starting at the outer layers of your application by concentrating on what matter to users; behavior. In this session/workshop we'll talk about how testing can be used both for specifying your application yet to be develop expected behavior and as accurate, running documentation that can be used to validate your stakeholder's acceptance criteria. We'll talk about the different types of testing and do a few hands-on exercises to flesh out a Rails application with RSpec and Capybara.</p>",
    "title": "BDD and Acceptance Testing with RSpec & Capybara",
    "speaker": {
      "name": "Brian Sam-Bodden",
      "description": "<p>Brian Sam-Bodden is an author, instructor, speaker and hacker that has spent most of his life crafting software. Heâ€™s a liberal arts educated fool and holds dual bachelor degrees from Ohio Wesleyan University in Computer Science and Physics and heads Integrallis http://www.integrallis.com a Ruby/Rails/Clojure/iOS sofware consultancy in Scottsdale, Arizona. He is a frequent speaker at user groups and conferences nationally and abroad. Brian is avid open source contributor and the author of \"Beginning POJOs: Spring, Hibernate, JBoss and Tapestry\", co-author of the \"Enterprise Java Development on a Budget: Leveraging Java Open Source Technologies\" and a contributor to Oâ€™reillyâ€™s \"97 Things Every Project Manager Should Know\"'.</p>"
    },
    "uid": "talk-69",
    "location": "Intro",
    "starting_at": 1367269200000,
    "ending_at": 1367271600000
  },
  {
    "description": "<p>The last few months have been pretty brutal for anyone who depends on Ruby libraries in production. Ruby is really popular now, and thatâ€™s exciting! But it also means that we are now square in the crosshairs of security researchers, whether whitehat, blackhat, or some other hat. Only the Ruby and Rails core teams have meaningful experience with vulnerabilites so far. It wonâ€™t last. Vulnerabilities are everywhere, and handling security issues responsibly is critical if we want Ruby (and Rubyists) to stay in high demand. </p><p>Using Bundlerâ€™s first CVE as a case study, Iâ€™ll discuss responsible disclosure, as well as repsonsible ownership of your own code. How do you know if a bug is a security issue, and how do you report it without tipping off someone malicious? As a Rubyist, you probably have at least one library of your own. How do you handle security issues, and fix them without compromising apps running on the old code? Donâ€™t let your site get hacked, or worse yet, let your project allow someone elseâ€™s site to get hacked! Learn from the hard-won wisdom of the security community so that we wonâ€™t repeat the mistakes of others.\n</p>",
    "title": "Security is hard, but we canâ€™t go shopping",
    "speaker": {
      "name": "AndrÃ© Arko",
      "description": "<p>AndrÃ© Arko has been a Rubyist for 8 years, and somehow wound up on the Bundler core team. He spends a lot of time excited to be writing in or about Ruby. His code lives at github.com/indirect, and his writings about code live at andre.arko.net.</p>"
    },
    "uid": "talk-54",
    "location": "252+253",
    "starting_at": 1367269200000,
    "ending_at": 1367271600000
  },
  {
    "description": "<p>Your app is your business, so keeping it healthy is important. Unfortunately, most of the tools available today are more like your doctor verifying the fact that you've had a heart attackâ€”after it's happened.</p><p>You can do better. In this session, you'll learn how to use metrics to be more proactive about monitoring your applications health, and to suss out the subtle but important warning signs that can help you prioritize developer time and improve the developer experience. We'll talk about how to instrument your code, what to measure, how to interpret the data, as well as how you can use the data to streamline your development process.\n</p>",
    "title": "Monitoring the Health of Your App",
    "speaker": {
      "name": "Carl Lerche and Yehuda Katz",
      "description": "<p>Carl is a member of the Ruby on Rails core team alumni and a contributor to many OSS projects, including Bundler. He spends his daytime hours at the startup he founded, Tilde Inc.. He began building web applications at the age of 13 using PHP, but has since moved on to master numerous languages and frameworks.</p><p>Yehuda Katz is a member of the  Ember.js, Ruby on Rails and jQuery Core Teams; his 9-to-5 home is at the startup he founded, Tilde Inc. Yehuda is the co-author of best-selling jQuery in Action and Rails 3 in Action. He spends most of his time hacking on open sourceâ€”his main projects, along with others, like Thor, Handlebars and Janusâ€”or traveling the world doing open source evangelism work. He blogs at http://yehudakatz.com and can be found on Twitter as @wycats.</p>"
    },
    "uid": "talk-56",
    "location": "P&S",
    "starting_at": 1367269200000,
    "ending_at": 1367271600000
  },
  {
    "description": "<p>Good integration tests are hard. There are many approaches for testing server/client HTTP libraries - all with various tradeoffs and problems that come up. Some are obvious, some are a little more tricky.</p><p>I'll run through some approaches and problems I've come across developing server/client APIs, while developing these in a highly distributed systems setup at Engine Yard.</p>",
    "title": "Testing HTTP APIs in Ruby",
    "speaker": {
      "name": "Shai Rosenfeld",
      "description": "<p>Shai is always excited when there is something new to learn, and hence has seemed to have found his fit doing technology.</p><p>He started out playing with Ruby and Rails in 2006. After supporting and helping scale some of the largest Ruby production systems, he moved on to development of one of the leading Platform as a Services.</p><p>Shai enjoys solving problems, facing new challenges and playing jazz music when he's not finding out something new on his laptop.</p>"
    },
    "uid": "talk-16",
    "location": "255",
    "starting_at": 1367269200000,
    "ending_at": 1367271600000
  },
  {
    "description": "<p>The dreams of developers working on monolithic Rails applications are frequently filled with sugar plums and service-oriented architectures--but like any kind of software design, SOA can easily become a tangled mess. Many of the same principles that guide our software design can guide our architecture design. We apply SOLID principles to applications to keep them loosely coupled, we design interfaces so we can send logical messages to our domain objects. We hide our databases behind abstractions because how we access our data shouldn't matter to how we consume it. Rarely, though, do we see the same practices applied to our services and APIs, leaving us with tightly coupled and difficult to extend service-oriented architectures. If you are facing the monorail to SOA challenge, consider looking at your services as objects and your APIs as messages. Service-oriented applications are complex, and the best way to fend off complexity is though object-oriented design.</p>",
    "title": "Object-Oriented Lessons for a Service-Oriented World",
    "speaker": {
      "name": "Chris Kelly",
      "description": "<p>Officially, Chris is the Developer Evangelist at New Relic. Unofficially, Chris is a happiness engineer. He spends his time working on things that hopefully make someone's day better, which makes him a bit of a Swiss-ArmyÂ® Knife. When Chris is not on a plane, he's on a soap box evangelizing the merits of coffee, open source, DevOps, travel and of course, Ruby. You can find him on the Internet as amateurhuman, including on Twitter and GitHub.</p>"
    },
    "uid": "talk-46",
    "location": "254",
    "starting_at": 1367272200000,
    "ending_at": 1367274600000
  },
  {
    "description": "<p>Out of the box, Rails provides facilities for preventing attacks like SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and more. As a result, it's considered one of the most secure web application frameworks available.</p><p>Digging deeper, however, you can find a number of places where Rails' default behavior is not as secure as it could be. This talk will focus on longstanding, known weak spots that create risks for your application and business if you are not aware of them.</p>",
    "title": "Rails' Insecure Defaults",
    "speaker": {
      "name": "Bryan Helmkamp",
      "description": "<p>Bryan (@brynary) is the founder of Code Climate, an automated code review tool for Ruby apps, and the lead organizer of the Gotham Ruby Conference in NYC. For the last seven years, he's been an active in the Ruby community as an acclaimed speaker, author and open source contributor. In 2009, he received a Ruby Hero Award for his efforts.</p>"
    },
    "uid": "talk-53",
    "location": "252+253",
    "starting_at": 1367272200000,
    "ending_at": 1367274600000
  },
  {
    "location": "Intro",
    "starting_at": 1367272200000,
    "ending_at": 1367274600000,
    "title": "Intro Workshop: BDD & Capybara",
    "description": "Brian Sam-Bodden",
    "speaker": {
      "name": "Brian Sam-Bodden"
    },
    "uid": "In1367272200000"
  },
  {
    "description": "<p>Paul Graham once quipped that \"Web 2.0\" really meant \"JavaScript now works\". Nearly ten years later, more and more functionality of our web applications is written in JavaScript. But for those of us who came of age when JavaScript was unreliable, it's been preferable to test the server-side, while leaving the UI a thin-as-possible shell. Testing the front-end was error prone and brittle.</p><p>However, when you're delivering a JavaScript widget hundreds of thousands of times a day on diverse third party websites, it needs to work. So: we need to test it, and those tests need to be as painless as possible to write and maintain.</p><p>This is a session for front-end testing skeptics (like me): It is possible to create tests that drive your web UI (JavaScript and all) that are automated, fast, reliable, headless -- no browser required -- and written in pure Ruby instead of some obtuse syntax. We'll explore the challenges and gotchas of testing the front-end and walk through an example that meets the above goals.</p>",
    "title": "Front-end Testing for Skeptics",
    "speaker": {
      "name": "Luke Francl",
      "description": "<p>Luke Francl is a developer at Swiftype, which provides search engines as a service, where he works on everything from the Swiftbot web crawler to answering support requests. Prior to joining Swiftype, he worked as a freelance developer and helped organize one of the largest BarCamps in the US. His career has focused mainly on web application development using a variety of technologies, including Tcl (seriously). He has been working with Ruby on Rails professionally since 2006. </p>"
    },
    "uid": "talk-35",
    "location": "255",
    "starting_at": 1367272200000,
    "ending_at": 1367274600000
  },
  {
    "location": "P&S",
    "starting_at": 1367272200000,
    "ending_at": 1367274600000,
    "title": "The War For Talent: How To Succeed As an Employer or Engineer",
    "description": "Allan Grant",
    "speaker": {
      "name": "Allan Grant"
    },
    "uid": "Th1367272200000"
  },
  {
    "location": "",
    "starting_at": 1367274600000,
    "ending_at": 1367276400000,
    "title": "Afternoon break",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Af1367274600000"
  },
  {
    "description": "<p>In a world of public and private clouds, API-driven load balancers, and bare metal servers there has never been more choice when building your next scalable killer application. As the complexity of your application's deployment environment increases, the economics of automation start to pay off. In this session we'll discuss the challenges facing complex application deployments, strategies to make development environments mirror production, and how you can manage architectural changes with your application over time. Automate all the things? Let's find out!</p>",
    "title": "Automation in Deployment on Hybrid Hosting and Private Cloud Environments -- Where Do We Go From Here?",
    "speaker": {
      "name": "Fletcher Nichol",
      "description": "<p>Fletcher Nichol is a software developer from warm and sunny Edmonton, Canada who has worked in jobs ranging from systems administrator to web application developer. He spends far too much time writing open source software and far too little time playing the drums. Fletcher works for Blue Box building hosting and deployment infrastructure.</p>"
    },
    "uid": "talk-60",
    "location": "P&S",
    "starting_at": 1367276400000,
    "ending_at": 1367278800000
  },
  {
    "description": "<p>The field of natural language processing and the many topics encompassed within it (summarization, full-text search, sentiment analysis, content categorization, etc.) is one of fastest growing, most complex and most highly demanded knowledge sets in the software industry today. </p><p>From spell checking in your SMS client to programmatically evaluating what your Twitter followers think of you, there is no shortage of real-world text processing and linguistic analysis problems all around us waiting to be solved. As Rubyists and software engineers, its important for us to know what tools related to NLP are available to us and how we can make use of them most effectively.\n<br/><br/>While there are a number of really great open-source libraries for natural language processing in Ruby and many great strides have been made in recent years, thereâ€™s still often a need to leverage tools and libraries externally from the Ruby ecosystem. Some of the best open-source NLP frameworks available rely very heavily on contributions from the academic world where Ruby as a language doesnâ€™t have the same presence as other languages like Python or Java.</p><p>In this talk, Iâ€™ll provide a beginner friendly introduction to NLP in general and Iâ€™ll give a quick overview of the tools and related projects that are currently available in the Ruby community. In addition, using real-world examples Iâ€™ll demonstrate how to painlessly leverage high performance, mature and well-established NLP libraries directly from your Ruby application using JRuby and JDK 7.</p>",
    "title": "Natural Language Processing with Ruby",
    "speaker": {
      "name": "Brandon Black",
      "description": "<p>I'm an avid, long-time Rubyist and web developer currently working for 10gen, the makers of MongoDB, as a Ruby language evangelist. My role at 10gen involves spending a large portion of my time doing work to aid the development of the Ruby community in general.</p><p>Among numerous personal ventures, my past work experience includes MySpace, MeLLmo and Facebook where I worked on a variety of things including user experience, developer platform APIs, geo-spatial mapping, mobile platforms and data visualization.</p>"
    },
    "uid": "talk-20",
    "location": "255",
    "starting_at": 1367276400000,
    "ending_at": 1367278800000
  },
  {
    "description": "<p>Developers: how many times have you had to completely rip out your hard earned code for a totally new site design?\n<br/>Designers: how many times has a re-design taken 4 times as long as the developer said it would and not looked good in the end?</p><p>Change all that by using an incremental approach to design.  Set up your code to change all the buttons at once or prioritize design changes to make each small change good enough for production.</p><p>A designer and developer will talk about the challenges and joys of making this process work in two production sites.</p><p>Topics covered:\n<br/>* What is incremental design?\n<br/>* How to design with incremental changes in mind\n<br/>* How to develop for incremental design, including utilizing SASS, structuring your mark-up and CSS, and structuring your Rails views and partials</p>",
    "title": "Incremental Design - A conversation with a designer and a developer.",
    "speaker": {
      "name": "Rebecca Miller-Webster and Savannah Wolf",
      "description": "<p>Rebecca Miller-Webster is a Ruby and JavaScript developer.  Currently, she is a Senior Engineer at HowAboutWe and Team Lead for the HowAboutWe for Couples product.</p><p>Savannah Wolf is an interaction and visual designer.  Currently, she is the Head of Product Design at HowAboutWe.</p>"
    },
    "uid": "talk-10",
    "location": "254",
    "starting_at": 1367276400000,
    "ending_at": 1367278800000
  },
  {
    "description": "<p>Rails: the result of magical incantations, voodoo, and wizardry? Or: a collection of patterns from the most awesomest language in the world (Ruby)? We'll show three different areas of Rails that seem to be the most magical: before_filters and callbacks, Procs, and inheritance. In the workshop, participants will create their own Ruby object implementing these magical powers. </p>",
    "title": "Rails is Just Ruby",
    "speaker": {
      "name": "Jesse Wolgamott",
      "description": "<p>Jesse is a Ruby fullstack freelance developer in Houston for Comal Productions. He created rubyfiddle.com and runs rubyoffrails.com.He blogs at jessewolgamott.com and has been a ruby lover since seeing find_by_username in Rails 1.2.1. He ran a BBS in the early 1990â€˜s and loved configuring the family 8086 menu system in DOS. Jesse creates software at Comal Productions, trains developers on the happiness of Ruby, and runs RubyOffRails.com - a ruby training program.</p>"
    },
    "uid": "talk-63",
    "location": "Intro",
    "starting_at": 1367276400000,
    "ending_at": 1367278800000
  },
  {
    "description": "<p>The future is real time! With the Rails 4.0 Live Streaming API we finally have the ability to easily add real time functionality to our apps. Learn all about the live streaming API, how best to take advantage of this in the browser, and how to deploy a real-time ready Rails app. Get ready to open your apps to a whole new world of interaction and functionality.</p><p>Topics we will cover:</p><p>* Live Streaming API\n<br/>* EventMachine vs Rails 4.0\n<br/>* Node.js vs Rails 4.0\n<br/>* Polling vs Live Streaming\n<br/>* Websockets &amp; Rails 4.0\n<br/>* Puma</p>",
    "title": "Real-Time Rails",
    "speaker": {
      "name": "Brian Cardarella",
      "description": "<p>Brian Cardarella is the owner of DockYard, a Boston-based Web and Mobile consultancy. He is the author of several popular libraries including ClientSideValidations, ValidAttribute, and CapabaraEmail. Most recently he was a speaker at EmberCamp in San Francisco.</p>"
    },
    "uid": "talk-38",
    "location": "252+253",
    "starting_at": 1367276400000,
    "ending_at": 1367278800000
  },
  {
    "location": "Intro",
    "starting_at": 1367279400000,
    "ending_at": 1367281800000,
    "title": "Intro Workshop: Rails Is Just Ruby",
    "description": "Jesse Wolgamott",
    "speaker": {
      "name": "Jesse Wolgamott"
    },
    "uid": "In1367279400000"
  },
  {
    "description": "<p>The Ruby on Rails developer faces an interesting duality.  Their inner Rubyist is driven by a sense of beauty and explores a wide range of ways to solve a problem.  The inner Railser is driven by a strong set of conventions and is guided by the Rails Wayâ„¢.  The /lib directory is where these developers meet and end result is a junk drawer of awkward code.</p><p>In this talk, I go over a few ways to keep this junk drawer problem from happening by adding some conventions I've created from building Rails in anger:\n<br/>  * Treat /lib as a temple (keep /lib in a state to extract to a gem in minutes)\n<br/>  * Avoid autoloading everything in /lib\n<br/>  * Use configuration to hide credentials from your library code\n<br/>  * Isolate your Domain Objects from library concerns through DCI</p>",
    "title": "Building Extractable Libraries in Rails",
    "speaker": {
      "name": "Patrick Robertson",
      "description": "<p>Patrick discovered the joys of Ruby through Rails in 2004 and hasn't strayed far from building web applications in Rails since then.  During the day he redefines what a useful medical application is at Iora Health.  In his spare time he organizes BostonRB and makes time for running his first half marathon in 2013.</p>"
    },
    "uid": "talk-14",
    "location": "255",
    "starting_at": 1367279400000,
    "ending_at": 1367281800000
  },
  {
    "description": "<p>One of the best ways to learn is to experiment with seemingly crazy ideas. When Rails 3 first came out, it became easier than ever to embed a Sinatra application inside your Rails application. But what if you wanted to implement parts of Sinatra in Rails?</p><p>Have you ever wished your controllers had Sinatra style routes? Have you ever wondered if you could render a template in the same context as your controllers? What about one single-file Rails applications?</p><p>In this talk, we are going to build all those functionalities into a Rails application, making sure we learn about Rails internals and have fun while doing it.</p>",
    "title": "You've got a Sinatra on your Rails",
    "speaker": {
      "name": "JosÃ© Valim",
      "description": "<p>JosÃ© Valim (@josevalim) is a Rails Core Team Member, author of Crafting Rails Applications and co-founder of Plataformatec, a consultancy firm based in Brazil. He started working with Ruby in late 2006 and received a Ruby Hero award for his open source work on Devise, Simple Form and Rails itself. He enjoys travelling around, speaking at conferences and lately working on Elixir, a programming language for the Erlang VM. </p>"
    },
    "uid": "talk-1",
    "location": "252+253",
    "starting_at": 1367279400000,
    "ending_at": 1367281800000
  },
  {
    "description": "<p>We hear the stories every so often. A study concludes that internet usage is making us \"dumber\", while another connects online activity to anxiety or depression. A respected journalist questions whether our advanced technology is really improving our lives. A mass movement of people deleting their Facebook or Twitter accounts sweeps through the community.</p><p>As developers, we hear these stories, and we shrug. Luddites and fearmongers, we call them. But don't they have a point? Do we truly understand what technology is, and how it impacts our society, the way we think and what we value? An important conversation is taking place. As Rails developers, as professionals working on the cutting edge of consumer technology, we should be involved.</p><p>This talk is a brief introduction to the philosophy of technology. We'll examine a few of the major views-- the writings of the philosophers, academics, and engineers who are asking questions regarding technology and society. We'll also explore what these questions mean for us as developers, what they can tell us about our profession, and what we can uniquely contribute to the conversation. We may not find a lot of solid answers, but we'll plow a rich field for discussion, and maybe gain a new perspective into just what it is that we spend our time doing.</p>",
    "title": "Humanity On Rails",
    "speaker": {
      "name": "Daniel Azuma",
      "description": "<p>Daniel Azuma has been developing with Rails for seven years, and currently works as Chief Software Architect at Pirq. He has a particular interest in the intersection of technology, spirituality, and culture, and holds graduate-level degrees in both computer science and theological studies. He lives with his wife in the Seattle area, and blogs at daniel-azuma.com.</p>"
    },
    "uid": "talk-26",
    "location": "254",
    "starting_at": 1367279400000,
    "ending_at": 1367281800000
  },
  {
    "location": "251+257+258",
    "starting_at": 1367282700000,
    "ending_at": 1367287200000,
    "title": "Evening announcements and keynote",
    "description": "Michael Lopp",
    "speaker": {
      "name": "Michael Lopp"
    },
    "uid": "Ev1367282700000"
  },
  {
    "location": "251+257+258",
    "starting_at": 1367341200000,
    "ending_at": 1367345700000,
    "title": "Morning announcements and keynote",
    "description": "Yehuda Katz",
    "speaker": {
      "name": "Yehuda Katz"
    },
    "uid": "Mo1367341200000"
  },
  {
    "description": "<p>Two completely different ways have emerged for using Rails as the back end to a rich client-side JavaScript application.</p><p>* The 37Signals \"Russian Doll\" approach, where the server generally returns HTML to the client. This approach uses aggressive caching and a little bit of JavaScript glue to keep the application fast.\n<br/>* The \"Rails API\" approach, where the server generally returns JSON to the client, and a JavaScript MVC framework handles the actual display.</p><p>Which of these will work for you? </p><p>We will look at code to see the structural difference between these two approaches and see what the speed, extensibility, and maintainability trade-offs are. At the end of the talk, you will be better equipped to chose a structure for your next rich-client application.</p>",
    "title": "Rails Vs. The Client Side",
    "speaker": {
      "name": "Noel Rappin",
      "description": "<p>Noel Rappin is a Senior Developer and Table XI's Agile Coach. Noel has more than a dozen years of professional development experience, with successful projects ranging from brand new startups to Fortune 500 clients. He has experience in the entire life cycle of a software project, from initial conception and planning through development, to deployment and maintenance of legacy projects. Noel also has a history of teaching and mentoring developers, helping them improve their skills.</p><p>A respected member of the web development community, Noel has authored five technical books, including \"Rails Test Prescriptions\" and \"Master Space and Time With JavaScript.\" Noel is also the author or co-author of \"Professional Ruby on Rails,\" \"wxPython in Action,\" and \"Jython Essentials.\"</p>"
    },
    "uid": "talk-5",
    "location": "252+253",
    "starting_at": 1367346600000,
    "ending_at": 1367349000000
  },
  {
    "description": "<p>thoughtbot are creators of the open-sourced testing tools FactoryGirl and Shoulda Matchers.</p><p>We recognize Test-Driven Development (TDD) can be difficult to practice as features increase in complexity. Testing is often skipped when developers feel uncomfortable with TDD or have not yet seen certain approaches in practice.</p><p>Weâ€™ll describe specific techniques used in TDD which touch on: Integration testing with RSpec+Capybara, Model Associations and Data Validations, Asynchronous Jobs, Emails, 3rd Party Services, and JSON API endpoints.</p>",
    "title": "TDD Workshop: Outward-in Development, Unit Tests, and Fixture Data",
    "speaker": {
      "name": "Harlow Ward & Adarsh Pandit",
      "description": "<p>Harlow Ward is a developer at thoughtbot (creators of Paperclip, Factory Girl, Shoulda, Airbrake, and more). Since joining thoughtbot he's been embracing his new-found TDD lifestyle. He's co-author of \"Ruby Science,\" and enjoys writing technical articles focused on sharing development techniques throughout the community.</p><p>Adarsh Pandit is a developer at thoughtbot. Adarsh trained as a biophysicist before working as a management consultant for McKinsey among other firms. A graduate of the apprentice.io program, Adarsh enjoys helping others learn TDD, experimenting with Agile-style development processes, and writing blog posts with rap references.</p>"
    },
    "uid": "talk-64",
    "location": "Intro",
    "starting_at": 1367346600000,
    "ending_at": 1367349000000
  },
  {
    "description": "<p>In this presentation, Matt Woodward will provide an overview of how WhitePages, the leading provider of contact information for people and businesses in the U.S., leverages its massive dataset of more than 200 million US adults and 300 million landline and mobile phone numbers to connect â€œpeopleâ€ with such personal identifiers as phone numbers (landline &amp; mobile), addresses, and birth dates. Matt will discuss how Ruby and Rails helps WhitePages build and expose its dataset, enabling a better experience for its core constituencies - consumers and businesses. This presentation will also showcase how Ruby has helped WhitePages transform its business model from a company that simply \"publishes\" data to a company that \"builds\" data. Finally, Matt will discuss how the improved dataset that Ruby has helped facilitate has strengthened the value proposition behind WhitePages' API, which is the vehicle that the companyâ€™s internal developers depend on to power existing products and which external developers can also tap into to support a wide range of interesting use-cases. Ultimately, youâ€™ll learn how you can take advantage of quick and easy access to North Americaâ€™s most comprehensive set of consumer contact data to build your next big product!</p>",
    "title": "Data Builds in WhitePages",
    "speaker": {
      "name": "Matt Woodward",
      "description": "<p>Matt is responsible for WhitePages' technology and product offerings for business. Matt's longtime focus has been on supporting businesses with technology, developing database engines and middleware, document management systems and mobile software development tools for Microsoft, FileNET and Microrim. Prior to joining WhitePages, Matt led Expedia's Transportation Technologies teams building search, shopping, booking, and customer service systems. Matt holds a BS in Computer Science from Washington State University.</p>"
    },
    "uid": "talk-57",
    "location": "P&S",
    "starting_at": 1367346600000,
    "ending_at": 1367349000000
  },
  {
    "description": "<p>What do home ownership and leveraged buyouts can teach us about how to use technical debt to our advantage? How can we sleep soundly at night when we have accumulated mountains and mountains of technical debt? When is good enough good enough and when are we just deceiving ourselves?</p>",
    "title": "Of Buyers And Renters and keeping a roof over our heads",
    "speaker": {
      "name": "Sebastian Delmont",
      "description": "<p>Sebastian has been using Rails since 2005 as the CTO of StreetEasy, the largest real estate portal in New York City. A big believer in both craftsmanship and pragmatism, he thinks it's OK for your coworkers to hate you a little for the mistakes in your old code if that old code was good enough to build the company that now employs all of you.</p>"
    },
    "uid": "talk-28",
    "location": "254",
    "starting_at": 1367346600000,
    "ending_at": 1367349000000
  },
  {
    "description": "<p>Sometimes, your application has to do something that is slow. Maybe you need to do some serious data crunching, maybe you need to call a slow third-party API, maybe you need to run a bunch of external processes. Trying to do these from within Rails is just asking for performance problems, as you'll be dragging your response times down significantly. But by using asynchronous workers, you can offload the work and let Rails stay nice and responsive.</p><p>There are a lot of choices and architectural concerns that come in whenever you're adding another piece to your application, and we'll address those decisions along with the actual code you'll need. We'll start with an overview of what exactly an asynchronous worker is (and how it's different from some similar things), what some of the different worker queues available are, and how you can maximize code reuse within your workers. Of course, we'll also take a look at code samples that will illustrate how simple things can be once you have all the pieces talking to each other correctly.</p><p>Examples will be given using Resque, an open-source asynchronous worker queue that uses Redis as the storage backend, but the ideas and patterns discussed will be applicable to other worker queues.</p>",
    "title": "Make Your Application Snappier With Asynchronous Workers",
    "speaker": {
      "name": "Dave Kapp",
      "description": "<p>In a former life, David had a degree in Asian Studies and taught English in Japan. He was later reborn as a software developer and did C++ and Java for a few years before finding the awesomeness of Ruby and other dynamic languages. He has been working with Ruby and and Rails since around 2006 and currently works for Coshx Labs. He lives in Austin, TX with his wife and two wonderful cats. His spare time is eaten up by playing videogames, studying Japanese, and learning about new programming languages and techniques.</p>"
    },
    "uid": "talk-9",
    "location": "255",
    "starting_at": 1367346600000,
    "ending_at": 1367349000000
  },
  {
    "description": "<p>Tests are supposed to save us money.  How is it, then, that many times they become millstones around our necks, gradually morphing into fragile, breakable things that raise the cost of change?</p><p>We write too many tests and we test the wrong kinds of things.  This talk strips away the veil and offers simple, practical guidelines for choosing what to test and how to test it.  Finding the right testing balance isn't magic, it's a magic trick; come and learn the secret of writing stable tests that protect your application at the lowest possible cost.</p>",
    "title": "The Magic Tricks of Testing",
    "speaker": {
      "name": "Sandi Metz",
      "description": "<p>Sandi Metz has 30 years of experience working on projects that survived to grow and change.  Sheâ€™s the author of the recently published â€˜Practical Object-Oriented Design in Rubyâ€™ (http://poodr.info) and (as all who read the book know) an avid cyclist.  She loves playing outside but dreams about code.</p>"
    },
    "uid": "talk-7",
    "location": "252+253",
    "starting_at": 1367349600000,
    "ending_at": 1367352000000
  },
  {
    "location": "Intro",
    "starting_at": 1367349600000,
    "ending_at": 1367352000000,
    "title": "TDD Workshop: Mocking, Stubbing, and Faking External Services",
    "description": "Harlow Ward & Adarsh Pandit",
    "speaker": {
      "name": "Harlow Ward & Adarsh Pandit"
    },
    "uid": "TD1367349600000"
  },
  {
    "description": "<p>In this talk, we'll explore split testing as a way to not only increase revenue and conversion through simple, surface-level changes, but also to dig deeper in order to help guide a product's roadmap by discovering which features customers really want and how much they're willing to pay.</p>",
    "title": "Split Testing for Product Discovery",
    "speaker": {
      "name": "Bryan Woods",
      "description": "<p>Bryan Woods is a Senior Software Engineer at HowAboutWe.</p><p>Bryan accidentally fell in love with programming after learning to code as a way to experiment with new ways of writing prose and composing music.</p><p>When he's not writing Ruby and JavaScript code to help people go on awesome dates, he's at home with his wife and two cats in Brooklyn, New York with a craft beer and playing with Clojure and Haskell or reading a good book.</p>"
    },
    "uid": "talk-12",
    "location": "255",
    "starting_at": 1367349600000,
    "ending_at": 1367352000000
  },
  {
    "description": "<p>Snappiness is an important key for any successful webpage. Most companies try to achieve responsive webshops by scaling their hardware big time. But Rails in combination with Nginx, Memcached and Redis is the key to deliver webpages very fast with a minimal amount of hardware. This talk will start with the basics of DHH's russian doll idea but will raise the bar than quite a bit. How can we combine fragment caching, page caching and HTTP caching to deliver personalized webshop pages for logged in users? How much brain can be delegated to Redis or the Webbrowser? Harddrive space is cheap. So use it! You'll get to know how to plan your data structure and where to use Memcached vs. Redis. Include the cache in the beginning of your development and not in the end. To make things a bit more interesting everything is replayed on a Raspberry Pi to show how much difference intelligent caching can make on any hardware. Save big time and get more clients with a faster web application!</p>",
    "title": "Cache = Cash!",
    "speaker": {
      "name": "Stefan Wintermeyer",
      "description": "<p>1998 - 2001 Vice President at SuSE Linux AG\n<br/>2001 - 2003 Project manager at Lufthansa Systems\n<br/>2003 - 2004 Vice President at Techspan Enterprise\n<br/>2004 - 2005 Founder and managing director at OTRS GmbH\n<br/>2005 - today Founder and managing director at AMOOMA GmbH</p><p>Wrote a successful book about Ruby on Rails 3.2.</p>"
    },
    "uid": "talk-22",
    "location": "254",
    "starting_at": 1367349600000,
    "ending_at": 1367352000000
  },
  {
    "location": "",
    "starting_at": 1367352000000,
    "ending_at": 1367355600000,
    "title": "Lunch",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Lu1367352000000"
  },
  {
    "description": "<p>Most of us know how to build beautiful web applications with Rails. With the help of templating tools like ERB and HAML our web apps create HTML documents, but, do you know exactly how those HTML documents end up in a browser?</p><p>During this talk I will show you the bits that make it all happen. We will dissect the relevant code within Rails, Rack and the thin web server to discover exactly how the web server starts and listens to a TCP port, communicates with Rails and returns the HTML document that your browser parses.</p><p>Why? Because we're curious about it, that's why.</p>",
    "title": "From Rails to the Web Server to the Browser",
    "speaker": {
      "name": "David Padilla",
      "description": "<p>David Padilla is CEO at Crowd Interactive, a leader Ruby on Rails consultancy based in Mexico.</p><p>He's usually trying all new technologies that come out every day, and, sometimes, just knowing how to use them is not enough, so, he spends a lot of his free time reading other people's code to understand how it works.</p><p>Through his career, he has been devoted to promoting the Ruby on Rails community in Mexico through rails.mx and the organization of the only Ruby conference in the area: Magma Conf.</p>"
    },
    "uid": "talk-15",
    "location": "252+253",
    "starting_at": 1367355600000,
    "ending_at": 1367358000000
  },
  {
    "description": "<p>In this session we'll go off the Rails and take a look at what our Pythonista cousins are doing with Django.</p><p>I'll start with some live coding: recreating DHH's infamous 15 minute blog demo using Django and explaining the building blocks of a Django app along the way. I'll then take that app and use it to look at some design decisions Django makes, and how they compare to Rails. You'll see convention over configuration in places you didn't expect it, why Django doesn't need attr_accessible or strong parameters, and how the template method pattern could change your life.</p><p>Why talk about Python at a Rails conference? Seeing another way of doing things forces us to think about what we're doing, challenges or validates the assumptions we make about our work, and inspires us to try new things.</p>",
    "title": "Sleeping with the enemy",
    "speaker": {
      "name": "George Brocklehurst",
      "description": "<p>George Brocklehurst is a Rails developer who misses working with Django sometimes. Before that he was a Django developer who missed working with Rails sometimes. George works for thoughtbot in Stockholm.</p>"
    },
    "uid": "talk-29",
    "location": "254",
    "starting_at": 1367355600000,
    "ending_at": 1367358000000
  },
  {
    "description": "<p>In this workshop, we'll focus on two specific problems that plague testing complex systems: how do I create useful test data, and how do I limit my test to only the part of the system that I want tested. We'll cover data creation tools like factories and fixtures. We will also talk about how to effectively use mock objects. And we'll do all that against some code that shows off potental testing problems.</p>",
    "title": "Testing Complex Systems: Creating data and limiting scope",
    "speaker": {
      "name": "Noel Rappin",
      "description": "<p>Noel Rappin is a Senior Developer and Table XI's Agile Coach. Noel has more than a dozen years of professional development experience  in the entire life cycle of a software project, from initial conception and planning through development, to deployment and maintenance of legacy projects. Noel also has a history of teaching and mentoring developers, helping them improve their skills. Noel has authored five technical books, including \"Rails Test Prescriptions\" and \"Master Space and Time With JavaScript.\"</p>"
    },
    "uid": "talk-65",
    "location": "Intro",
    "starting_at": 1367355600000,
    "ending_at": 1367358000000
  },
  {
    "description": "<p>We've all heard how great the cloud is - but no one likes learning a new proprietary API if they don't need to. In this session, I'll demonstrate how you can develop, test and deploy ROR apps faster to HP's public cloud based on OpenStack technology.  If you are new to the cloud or if you're just a CLI commando, I'll run through HP's Ruby CLI, spin up cloud servers and attach block storage faster than you thought possible. And, for Ruby Fog fans, I'll show you the HP Ruby Fog extensions that let you easily provision and manage cloud servers and storage using your favorite environment.\n</p>",
    "title": "Flattening The Cloud Learning Curve Using Rails",
    "speaker": {
      "name": "Michael Murphy",
      "description": "<p>* 14 years in IT 6 focused in cloud\n<br/>* Notable Employers: Alliance Bernstein, Rackspace Cloud, HPCS\n<br/>* Likes: Linux, Basketball, and Star Wars\n<br/>* Background in: LAMP, Openstack, Infrastructure Deployment, and Automation.</p><p>In high school and early on in my career I was focused on Windows and PC Repair.  When I got my first Linux support job on pure luck I fell in love.  I have spent the past 6 years watching Cloud grow from an idea to a full-fledged powerhouse.  I absolutely love taking manual pain points and working with teams to script, automate, and optimize.  I am a customer advocate and truly believe that the better I can make their experience the more I will enjoy my day. I believe in the open source model both in software and knowledge sharing.\n</p>"
    },
    "uid": "talk-61",
    "location": "P&S",
    "starting_at": 1367355600000,
    "ending_at": 1367358000000
  },
  {
    "description": "<p>This talk will introduce Brainstem, a new Rails library for easily presenting and versioning complex ActiveRecord model relationships through your JSON API. Allow your internal or external API consumers to eager-load model associations, request custom scopes and sorts, load multiple objects by ID simultaneously, and generate JSON that uses references instead of repeating data.</p><p>While your Brainstem API can be consumed by any JSON client, it will truly shine when using the included Backbone integration, adding relationship-aware models, centralized data loading, and a smart caching identity map to your Backbone applications.</p><p>All of this is designed to reduce network requests and simplify development of HTML5 applications, especially mobile ones. With Backbone + Brainstem, loading a hierarchy of objects from your server can be reduced to one line of code and one network request.</p><p>This talk will survey Brainstem usage in Rails, then dive into how it can enable rich mobile HTML5 applications.</p>",
    "title": "Introducing Brainstem, your companion for rich Rails APIs",
    "speaker": {
      "name": "Andrew Cantino",
      "description": "<p>Andrew Cantino is an experimentalist and web developer.  He is the VP of Engineering at Mavenlink where he shuffles people and code.  Andrew worked on Gmail at Google, on video search at CastTV, and spent two years practicing Agile software development at Pivotal Labs.  If you're not careful, he may replace you with a Bayesian Classifier.</p><p>Follow Andrew on Twitter at @tectonic or at http://andrewcantino.com</p>"
    },
    "uid": "talk-8",
    "location": "255",
    "starting_at": 1367355600000,
    "ending_at": 1367358000000
  },
  {
    "description": "<p>Your customers care about how fast your application works, you should too.... At Heroku we see millions of apps deploy and we know what it takes to get serious performance out of your code and Rails. In this talk we'll cover backend tips and frontend tricks that will help your Rails app go faster than ever before.</p>",
    "title": "Forget Scaling: Focus on Performance",
    "speaker": {
      "name": "Terence Lee",
      "description": "<p>Have you ever spent the night resolving gem dependencies by hand and thought \"Where has the time gone\"? Of course not, because Terence Lee is hard at work maintaining Bundler, which does this for you. When he's not working in Open Source he takes photos, travels the world, and occasionally writes code for Heroku. He lives in Austin, loves tacos, and wears a blue hat. Say hi.\n</p>"
    },
    "uid": "talk-58",
    "location": "P&S",
    "starting_at": 1367358600000,
    "ending_at": 1367361000000
  },
  {
    "description": "<p>APIs are interfaces, just like UIs. But while a website or a mobile app is designed to be used by a consumer, an API has two very specific audiences in mind: other systems, and the programmers who build them. </p><p>A well-designed API can make or break an application. So how do developers build great APIs? What design principles should be followed? We will discuss these questions based on the work of thinkers in the areas of industrial design, writing, and product design theory.</p>",
    "title": "Designing great APIs: Learning from Jony Ive, Orwell, and the Kano Model",
    "speaker": {
      "name": "Jon Dahl",
      "description": "<p>Co-founder of Zencoder, a YC-backed startup that provides the fastest API-based video transcoding in the cloud. Zencoder was acquired in 2012 by Brightcove, and Jon is now VP of Encoding Services. Before Zencoder, he ran a Ruby on Rails development shop, blogged at http://railspikes.com, wrote a Master's thesis on philosophy and theology, and made a half-hearted attempt at becoming a Lisp hacker.</p>"
    },
    "uid": "talk-48",
    "location": "255",
    "starting_at": 1367358600000,
    "ending_at": 1367361000000
  },
  {
    "description": "<p>Go has rapidly built a reputation as a great language for web development. But as Rails developers, we already have a really, really great language for web development -- why should we be interested in Go?</p><p>Iâ€™m convinced that every web developer would benefit from exposure to the Go approach to programming, which places a strong emphasis on up-front error handling and modular, namespaced libraries. Let's sit down and compare some code!</p><p>In this talk, we will:\n<br/>\t* Compare idiomatic approaches to common problems such as error handling, dependency management and testing in Go and Ruby.\n<br/>\t* Think carefully about tradeoffs between different programming styles and examine how programming languages encourage one style or another.\n<br/>\t* Tease out common ideas and best practices that apply to all web applications, regardless of language or framework.\n<br/>\t* Read a bunch of code.</p><p>We will not:\n<br/>\t* Try to convince anyone to ditch Ruby/Rails and embrace Go.\n<br/>\t* Make vague, unsubstantiated claims about the benefits of static or dynamic typing.\n<br/>\t* Assume any prior knowledge of Go.</p>",
    "title": "What Ruby Developers Can Learn From Go",
    "speaker": {
      "name": "Lionel Barrow",
      "description": "<p>Lionel Barrow (@lionelbarrow) is a developer at Braintree and a graduate student in computer science at the University of Chicago. At Braintree, he worked on Venmo Touch, once of the first highly available web services to be written in Go. A born geek, he fell into programming when he got sick of manually de-duplicating his college's admissions database. When not coding, he blogs (in vim) and dabbles in machine learning -- which, come to think of it, actually involves coding.     </p>"
    },
    "uid": "talk-40",
    "location": "254",
    "starting_at": 1367358600000,
    "ending_at": 1367361000000
  },
  {
    "location": "Intro",
    "starting_at": 1367358600000,
    "ending_at": 1367361000000,
    "title": "Intro Workshop: Testing Complex Systems",
    "description": "Noel Rappin",
    "speaker": {
      "name": "Noel Rappin"
    },
    "uid": "In1367358600000"
  },
  {
    "description": "<p>Let's be honest: ActiveRecord's got issues, and it's not going to deal with them on its own. It needs our help.</p><p>Don't think so? Let's take a closer look together. We'll examine the myriad of perils and pitfalls that await newbie and veteran alike, ranging from intentionally inconsistent behavior to subtle oddities arising from implementation details.</p><p>Of course, as with any intervention, we're only doing this because we care. At the very least, you'll learn something you didn't know about ActiveRecord, that helps you avoid these gotchas in your applications. But I hope that you'll leave inspired to contribute to ActiveRecord, engage in discussion about its direction with the core team, and therefore improve the lives of your fellow Rails developers.</p><p>WARNING: We will be reading the ActiveRecord code in this talk. Not for the faint of heart.</p>",
    "title": "An Intervention for ActiveRecord",
    "speaker": {
      "name": "Ernie Miller",
      "description": "<p>Ernie's been writing code since he was 6 years old, but only getting paid to do so for the past 15 years or so. Sometimes he still can't believe people actually *pay us* to have this much fun.</p><p>He's the author of a bunch of Rubygems, most of which interact with ActiveRecord in some way, and some of which might even be useful, a contributor to Rails, a committer to ARel, and an ardent believer that all true first person shooters are played with a mouse and keyboard.</p>"
    },
    "uid": "talk-2",
    "location": "252+253",
    "starting_at": 1367358600000,
    "ending_at": 1367361000000
  },
  {
    "location": "",
    "starting_at": 1367361000000,
    "ending_at": 1367362800000,
    "title": "Afternoon break",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Af1367361000000"
  },
  {
    "description": "<p>What is the best data storage option for your application?  We have an abundance of conventional wisdom when it comes to building applications on top of a relational database in the Ruby world.  Building an application on top of a NoSQL database is a different story.  I will present a conceptual framework for understanding Access Patterns that jives with properties of databases, then review common NoSQL databases and propose considerations for choosing one over another. I will also review some uncommon NoSQL databases that address common use cases, and suggest that perhaps some of these should be used more often. Most importantly, I will describe the different state of mind that you should have when building applications on top of these NoSQL options, and provide visualization of non-relational concerns like: fault tolerance, availability, consistency, capacity planning, and horizontal vs vertical scaling.  Whether or not you choose a NoSQL option for a future project, you wonâ€™t look at data storage options in the same way after this presentation. ;-)</p>",
    "title": "Data Storage: NoSQL Toasters and a Cloud of Kitchen Sinks",
    "speaker": {
      "name": "Casey Rosenthal",
      "description": "<p>Casey Rosenthal is currently Director of Training at Basho, where he installs and tests Riak clusters and provides training to clients so that they can do the same. As Chief Software Engineer for Port Forty Nine, Casey worked for NASA, Caltech, and JPL to engineer systems for storing and disseminating the image archives of space telescopes such as Hubble, Spitzer, Chandra, etc. He came in 4th place at the BotPrize 2K competition in Copenhagen for Discordia, a software bot written in jRuby that plays Unreal Tournament like a human based on a new artificial intelligence algorithm. He published a paper on that algorithm and spoke about it at GoRuCo '11.  He created RubyGames, a learner-centered Ruby facilitation for groups, and ran it throughout user groups in New England in '09 and '10, and brought it to a warm reception at the New York Ruby Meetup in '11 where he was an Assistant Director for the user group. Casey was an Expert Panel Judge for the '09 RailsRumble and again in '12, and competed in the '10 RailsRumble. He won a seed grant from the Maine Institute of Technology to commercialize a discrete event simulation framework written in Ruby.</p>"
    },
    "uid": "talk-17",
    "location": "252+253",
    "starting_at": 1367362800000,
    "ending_at": 1367365200000
  },
  {
    "description": "<p>This talk+workshop highlights some Ruby libraries that are particularly useful when developing Rails applications. In the talk portion, we'll give an overview of some specific classes and modules, and then in the workshop we'll break into groups to dive deeper into libraries of each participant's choice, with a focus on developing the skills needed to read and understand the Ruby documentation. Time and interest permitting, we'll incorporate test-driven development into our investigations.</p>",
    "title": "Ruby Libraries Important for Rails",
    "speaker": {
      "name": "Michael Hartl",
      "description": "<p>Michael Hartl is the author of the Ruby on Rails Tutorial.</p>"
    },
    "uid": "talk-66",
    "location": "Intro",
    "starting_at": 1367362800000,
    "ending_at": 1367365200000
  },
  {
    "description": "<p>Self-documenting code is a pipe dream. TDD (or BDD) is not the panacea of testing. In the pursuit of test coverage we've forgotten what really matters: getting things done. Lets talk about putting documentation and testing into their proper place. Tools that ease maintenance, help other developers join a project, and reduce bugs.</p><p>I'm going to go over lessons learned in writing, maintaining, and introducing new developers to 20,000 lines of code. Specifically, how we are testing, documenting, and refactoring our code to stay sane, make the team happier, and get more done.</p>",
    "title": "Delicious Controversy: Docs & Tests",
    "speaker": {
      "name": "Thomas Meeks",
      "description": "<p>Thomas Meeks loves to code, and has been doing it for ten years. He currently does a lot of heavy lifting as a senior developer at Envy Labs and Code School.</p>"
    },
    "uid": "talk-27",
    "location": "254",
    "starting_at": 1367362800000,
    "ending_at": 1367365200000
  },
  {
    "location": "255",
    "starting_at": 1367362800000,
    "ending_at": 1367365200000,
    "title": "",
    "description": "Cancelled",
    "speaker": {
      "name": "Cancelled"
    },
    "uid": "1367362800000"
  },
  {
    "description": "<p>Usability researchers have known for years that people browsing the Internet\n<br/>don't read things word by word - they scan pages for the content they want. Yet\n<br/>many API's and documentation resources are written as though users are reading\n<br/>every word. If busy users can't find what they are looking for, you'll have\n<br/>more support tickets (an expense), or more frustration (lost revenue).</p><p>Writing effective documentation requires knowing who your users are and how\n<br/>they are finding answers to their questions. In this presentation, we'll\n<br/>examine practical techniques to make your documentation work for busy users. \n<br/>Looking at examples and user testing from our experience at Twilio, attendees will learn: </p><p>- how users find (or fail to find) your documentation\n<br/>- how users view and get started (or fail to get started) with your product\n<br/>- how to take advantage of underused documentation tools like your error messages, your API, and SEO.\n</p>",
    "title": "How to Write Documentation for People That Don't Read",
    "speaker": {
      "name": "Kevin Burke",
      "description": "<p>Kevin is an API Engineer at Twilio, responsible for maintaining Twilio's API\n<br/>documentation and API libraries. Kevin once came within seven places of making\n<br/>the National Spelling Bee. He can be found online at http://kev.inburke.com.\n</p>"
    },
    "uid": "talk-31",
    "location": "254",
    "starting_at": 1367365800000,
    "ending_at": 1367368200000
  },
  {
    "location": "Intro",
    "starting_at": 1367365800000,
    "ending_at": 1367368200000,
    "title": "Intro Workshop: Ruby Libraries Important for Rails",
    "description": "Michael Hartl",
    "speaker": {
      "name": "Michael Hartl"
    },
    "uid": "In1367365800000"
  },
  {
    "description": "<p>Your fledgling social network for hedgehogs is starting to gain traction, but now new feature requests are pouring in. How you can you meet the demands of an ambitious product team within your existing stack? Thereâ€™s no time to waste, so we will look at how to leverage the venerable Postgres workhorse.</p><p>We will look at some of Postgres' unique features that lend themselves to solving the problems Rails developers face when moving from v1 products to v2 and beyond.  We will focus on SQL and ActiveRecord, and talk about pragmatic solutions to hairy problems.  Get practical, hands-on advice about using Postgres with ActiveRecord to support tagging, model hierarchical data, store arbitrary metadata, and add full text search to your application.  </p><p>By the end of this talk, youâ€™ll be able to go to your next meeting armed with confidence in your ability to build the ultimate hedgehog destination online.</p>",
    "title": "Postgres, the Best Tool You're Already Using",
    "speaker": {
      "name": "Adam Sanderson",
      "description": "<p>Adam, a full stack developer at LiquidPlanner, has been professionally writing software that helps people get work done for the last ten years.  In college, like most kids, he experimented, and did a little Java, but since the early 0.x releases of Ruby on Rails, he's cleaned up his act, and never looked back.</p><p>You can find him enthusiastically running, biking, and hiking around Seattle.  An odd mix of software enthusiast and luddite curmudgeon; he is just as happy to chat about cutting edge software as he is to show off his ancient cellular telephone or grumble about kitchen gadgets.</p>"
    },
    "uid": "talk-39",
    "location": "255",
    "starting_at": 1367365800000,
    "ending_at": 1367368200000
  },
  {
    "description": "<p>Pry is the featureful development console for Ruby. From its humble roots as an irb replacement, Pry has grown into an indispensable tool for any Ruby or Rails programmer.</p><p>Using some real-life examples, I'll explain how to use Pry effectively.</p><p>We'll start from the beginning, with simple features for exploring libraries and source-code in glorious technicolor. Then we'll move up a level and discuss how to inspect, debug and even modify a program while it is still running. Finally we'll touch on some of Pry's more advanced plugins that can really help you get a feel for what your code is doing.</p>",
    "title": "Pry â€” The Good Parts!",
    "speaker": {
      "name": "Conrad Irwin",
      "description": "<p>Conrad is a maintainer of Pry, and author of numerous supporting gems. He moved from Django to Rails in 2008 and hasn't looked back since. A dedicated programmer who hits difficult problems so hard that they can't fight back.</p>"
    },
    "uid": "talk-25",
    "location": "252+253",
    "starting_at": 1367365800000,
    "ending_at": 1367368200000
  },
  {
    "location": "",
    "starting_at": 1367368200000,
    "ending_at": 1367373600000,
    "title": "Happy hour",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Ha1367368200000"
  },
  {
    "location": "251+257+258",
    "starting_at": 1367427600000,
    "ending_at": 1367432100000,
    "title": "Morning announcements and keynote",
    "description": "James Duncan Davidson",
    "speaker": {
      "name": "James Duncan Davidson"
    },
    "uid": "Mo1367427600000"
  },
  {
    "description": "<p>Elasticsearch is a powerful text search engine that's easy to configure and to integrate into your Rails and Ruby applications.  But it's more than just a general text search engine--elasticsearch stores data in JSON format allowing for faceting and complex searches.  There are gems that integrate it with ActiveRecord, but it can also be used easily outside of ActiveRecord.  Learn from the real-world application of elasticsearch for general text searches to specific catalog-type searches.\n<br/><br/>We'll cover the elasticsearch basics, the existing gems you can use to integrate, and the lessons learned from integrating into existing projects.  Examples include: how to index existing ActiveRecord models for general text searches, how to use elasticsearch for autocomplete, and how to use for complex queries.</p>",
    "title": "Using Elasticsearch with Rails Apps",
    "speaker": {
      "name": "Brian Gugliemetti",
      "description": "<p>Brian Gugliemetti Bio: Brian Gugliemetti is a Staff Developer at Spiceworks in Austin, TX.  He's been working with Ruby and Rails since 2006.\n</p>"
    },
    "uid": "talk-49",
    "location": "252+253",
    "starting_at": 1367433000000,
    "ending_at": 1367435400000
  },
  {
    "description": "<p> Code Kata is a term coined by Dave Thomas, co-author of the book The Pragmatic Programmer, in a nod to the Japanese concept of kata in the martial arts. A code kata is an exercise in programming which helps a programmer hone their skills through practice and repetition.</p><p>The goal of this Kata is to get your mind wired into performance driven development.  We'll explore, diagnose, and fix a variety of performance problems to reinforce your skills as a user of New Relic.</p>",
    "title": "New Relic Performance Code Kata",
    "speaker": {
      "name": "Sam Goldstein and Ben Weintraub",
      "description": "<p>Sam manages New Relic's Ruby team, which develops the newrelic_rpm gem. He's been writing Ruby for almost a decade and is the author of several semi-popular gems like diffy and timetrap. When he's not building software he likes biking, camping, gardening, traveling, and spending time with his wife Brenna.</p><p>Ben joined New Relic in 2012 as an engineer on the Ruby Agent team. He previously worked for Apple on the iOS Performance team doing low-level performance work, and for DECK Monitoring as a Rails engineer. His hobbies include hiking, rock climbing, and (recently) brewing delicious beverages.\n</p>"
    },
    "uid": "talk-55",
    "location": "P&S",
    "starting_at": 1367433000000,
    "ending_at": 1367435400000
  },
  {
    "description": "<p>Starting Rails applications is one thing, but how you apply the priciples of MVC as an application grows determine whether your application is modular and maintainable or a convoluted mess. In this session, we'll use an existing application to explore and practice some of the common mistakes, correct techniques, and concepts behind the techniques to improve your development patterns.</p>",
    "title": "Properly Factored MVC in Rails Applications",
    "speaker": {
      "name": "Katrina Owen & Jeff Casimir",
      "description": "<p>Jeff Casimir started Jumpstart Lab in 2009 and has been teaching Ruby, Rails, and JavaScript ever since. Most recently, he created the long-form developer training programs HungryAcademy at LivingSocial in DC and gSchool in Denver. When not teaching, he's constantly battling towards inbox zero. </p><p>Katrina Owen recently joined Jumpstart Lab, co-teaches gSchool, and brings a passion for doing things the right way. She mentally beats students into strong TDD, SRP, and DRY practices. Outside the classroom, she's a weekly panelist on The Ruby Rogues podcast.</p>"
    },
    "uid": "talk-67",
    "location": "Intro",
    "starting_at": 1367433000000,
    "ending_at": 1367435400000
  },
  {
    "description": "<p>So you've just added a suite of RESTful APIs to your web service. Now you need to generate documentation and build Ruby, Python, and JavaScript clients to consume those new APIs. With so many moving parts, how do you keep your service, documentation and clients in sync?</p><p>We all know how to describe data using ActiveRecord models. Have you considered using a model to describe your service?</p><p>A service model provides a number of benefits including: easy to generate API documentation, consistent server side parameter validation, versioned APIs, easy to build clients, and more. It also represents a unified view of your API which helps to keep your code and documentation DRY. But what does a service model look like? For instance, did you know that your APIs can be described using just four parameter types? What if your could express your APIs using a Rails DSL?</p><p>This talk will introduce Seahorse, a DSL for describing API operations for just about any web service. It provides all of the above functionality, allowing you to describe your service model in a single place with Ruby code. We will demonstrate how to use Seahorse to generate clients, model existing real-world APIs, and even build one of our own.</p>",
    "title": "Describing Your World with Seahorse",
    "speaker": {
      "name": "Trevor Rowe",
      "description": "<p>Trevor Rowe is a software developer at Amazon Web Services working on the AWS SDKs for Ruby and Node. He authored the Seahorse tool, worked on integrating Paperclip with the aws-sdk gem, and has contributed to a variety of other open source projects.</p>"
    },
    "uid": "talk-45",
    "location": "255",
    "starting_at": 1367433000000,
    "ending_at": 1367435400000
  },
  {
    "description": "<p>It's always inspiring to me to hear about how the technology stack I'm familiar with has been used to solve interesting problems; this is one of the extreme versions of that experience.  Over the last few years, Rails has been used to solve several of the logistical pain points of the third largest fire service organization in the state of Missouri, and in this talk we're going to look at how it happened.  Along the way we'll look at some of the challenges of working with such an out-of-the-ordinary organization and how Rails fit into addressing some fairly unique requirements and constraints.  This is one Rails-in-the-wild case study that you won't want to pass up.</p>",
    "title": "Firefighting on Rails",
    "speaker": {
      "name": "Ethan Vizitei",
      "description": "<p>Ethan is a 3rd generation software developer (how many people can say that their grandmother was a FORTRAN pro?).  He's a software developer at 12 Spokes where he turns big ideas into well-tested software, and has a passion for self-education.  When not banging away on his keyboard, you can find him at the local fire station where he's a firefighter on the side, or brewing a batch of beer for his friends and family on his back porch.  An avid musician, rock climber, beekeeper, home vintner, woodworker, bicyclist, and father, one thing you won't ever see is him with a shortage of things to talk about.</p>"
    },
    "uid": "talk-34",
    "location": "254",
    "starting_at": 1367433000000,
    "ending_at": 1367435400000
  },
  {
    "description": "<p>You have been doing this Rails thing for a while and you're starting to feel like it's time to give back. Great! Now what?</p><p>In this session we'll walk through the technical aspects of getting started with contributing back to Rails as well as the non-technical tips, tricks, and considerations to keep in mind along the way.</p>",
    "title": "Your First Rails Pull Request",
    "speaker": {
      "name": "Mark McSpadden",
      "description": "<p>I'm the Technical Director of Sabre Travel Studios, the \"labs\" group at the mother of travel companies, Sabre. I also organize the Dallas Ruby Brigade and Big Ruby Conf and am a sucker for a good code contest.</p><p>Off-screen, I enjoy cooking, eating, laughing, playing, and exploring the world with my wife and 2 young daughters.</p>"
    },
    "uid": "talk-32",
    "location": "254",
    "starting_at": 1367436000000,
    "ending_at": 1367438400000
  },
  {
    "location": "Intro",
    "starting_at": 1367436000000,
    "ending_at": 1367438400000,
    "title": "Intro Workshop: Properly Factored MVC",
    "description": "Katrina Owen & Jeff Casimir",
    "speaker": {
      "name": "Katrina Owen & Jeff Casimir"
    },
    "uid": "In1367436000000"
  },
  {
    "description": "<p>Building services and integrating them into Rails is hard. We want smaller Rails apps and nicely encapsulated services, but services introduce complexity. If you go overboard in the beginning, you're doing extra work and getting some of it wrong. If you wait too long, you've got a mess.</p><p>At Yammer, we constantly clean up the mess that worked well in the early days, but has become troublesome to maintain and scale. We pull things out of the core Rails app, stand them up on their own, and make sure they work well and are fast.  With 20+ services, we've learned some lessons along the way. Services that seem clean in the beginning can turn into development environment nightmares. Temporary double-dispatching solutions turn into developer confusion. Monitoring one app turns into monitoring a suite of apps and handling failure between them.</p><p>This talk looks at our mistakes and solutions, the tradeoffs, and how we're able to keep moving quickly.  Having services and a smaller Rails codebase makes for scalable development teams, happier engineers, and predictable production environments. Getting there is full of hard decisions -- sometimes we get it right, sometimes we get it wrong, but we usually have a story to tell.</p>",
    "title": "Services and Rails: The Sh*t They Don't Tell You",
    "speaker": {
      "name": "Brian Morton",
      "description": "<p>Brian is a software engineer at Yammer in San Francisco where he builds software to change the way the world gets work done. Heâ€™s obsessed with clean code, simple solutions to hard problems, and drinking whisky, but not always in that order. In his free time, he loves contributing to open source, playing Zelda, and spinning records on Serato.</p>"
    },
    "uid": "talk-21",
    "location": "255",
    "starting_at": 1367436000000,
    "ending_at": 1367438400000
  },
  {
    "description": "<p>With Rails 4.0 killing off the humble plugin, there is never a better time to learn how to create reusable code using Engines. Creating an engine can be as simple as adding a model, or a complex as an entire content management system. Using the Asset Pipeline, even javascript and css files can be packaged and shared, making projects cleaner and more maintainable than ever before.</p><p>This talk will cover how developers can create their own engines, to add new controllers/models/views, rake tasks and/or generators. It will cover how engines can interact with Rails having their own initializers and middleware. Finally, based on our experiences converting BrowserCMS and its entire module ecosystem to work as mountable engines, this talk will cover how to make engines that are designed to work together, extend each other engineâ€™s behavior and make it easy for developers to upgrade when you release new versions.</p>",
    "title": "Creating Mountable Engines",
    "speaker": {
      "name": "Patrick Peak",
      "description": "<p>Patrick Peak is the project founder and lead for BrowserCMS, an open source Rails CMS and the CTO of BrowserMedia/nclud, a full service interactive agency near DC. His current focus in on promoting Rails for content management. He is the co-author of Hibernate Quickly, published by Manning.</p><p>A history of my past speaking engagements at Ruby Conferences can be found under 'Projects' here: http://www.linkedin.com/pub/patrick-peak/5/147/18/</p>"
    },
    "uid": "talk-43",
    "location": "252+253",
    "starting_at": 1367436000000,
    "ending_at": 1367438400000
  },
  {
    "location": "",
    "starting_at": 1367438400000,
    "ending_at": 1367442000000,
    "title": "Lunch",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Lu1367438400000"
  },
  {
    "description": "<p>Ruby developers have many great options for simply hosting their web applications. But what happens when your product outgrows Heroku? Managing your own servers can be an intimidating task for the average developer. This session will cover the lessons we've learned at Braintree from building and maintaining our infrastructure. It will cover how we leverage Ruby to automate and control all of our environments. Some specific topics we'll cover:</p><p>* Orchestrating servers with capistrano\n<br/>* Using puppet for configuration management\n<br/>* Our cap and puppet workflow using git\n<br/>* How vagrant can provide a sane test environment\n<br/>* Some pitfalls you should avoid</p>",
    "title": "DevOps for the Rubyist Soul",
    "speaker": {
      "name": "John Downey",
      "description": "<p>John Downey is a developer working at Braintree. Braintree helps businesses accept credit card payments online with great development tools and first class support. There he has worked on their highly available infrastructure and integrations into the banking system. In his free time he contributes to open source projects and mentors high school students in the FIRST Robotics Competition.</p>"
    },
    "uid": "talk-30",
    "location": "252+253",
    "starting_at": 1367442000000,
    "ending_at": 1367444400000
  },
  {
    "description": "<p>When you're building a payment platform, you want to make sure that your system is always available to accept orders. However, the complexity of the platform introduces the potential for it to go down when any one of the moving parts fails. In this talk, I will show you the approaches that we've taken and the risks that we have to take to ensure that our platform will always be available for our customers. Even if you're not building a payment platform, these approaches can be applied to ensure a high availability for your platform or service as well.</p>",
    "title": "Zero-downtime payment platforms",
    "speaker": {
      "name": "Prem Sichanugrist and Ryan Twomey",
      "description": "<p>Prem is a developer working at thoughtbot in Boston, MA. He started using Ruby and Ruby on Rails since 2007 and fell in love with it. He started contributing to Ruby on Rails and several projects around it in 2009 and becoming a pretty well-known open source contributor.</p><p>Ryan is a Ruby and iOS developer, currently working as a team lead for SCVNGR/LevelUp.</p>"
    },
    "uid": "talk-44",
    "location": "255",
    "starting_at": 1367442000000,
    "ending_at": 1367444400000
  },
  {
    "description": "<p>You understand Ruby and Rails, and you've gotten the hang of using other peoples' gems - but what about writing your own? Gems underpin almost every piece of Ruby code we write - and so, being able to craft your own gems is not only incredibly useful, it provides an avenue for code reuse and open source sharing.</p><p>During this session, Pat will first discuss the ecosystem around gems and the knowledge required to write your own, plus a few tools available to assist with this, and some approaches for how to structure gems that integrate with Rails itself.</p><p>The workshop will then put this knowledge into practice by building our own gems from scratch.</p>",
    "title": "Crafting Gems",
    "speaker": {
      "name": "Pat Allan",
      "description": "<p>Pat is a web developer who is (more often than not) found in Melbourne, Australia. When not writing open source Ruby libraries or taking care of client work, he can be found helping to organise the Trampoline unconference and the occasional Rails Camp. He also makes a mean pancake.</p>"
    },
    "uid": "talk-68",
    "location": "Intro",
    "starting_at": 1367442000000,
    "ending_at": 1367444400000
  },
  {
    "description": "<p>Are you a developer who's stuck behind a firewalled environment?  How about a corporate environment with a lot red tape and access issues to get through?  Some of us Rails developers don't have the luxury to work in a truly open environment where one can 'gem install rspec' and viola! we have testing.  So what do we do about that?  How do we use RVM to manage our gemsets and Ruby versions behind these restrictions?  What about deployments?  Is Capistrano even a viable option?  I've been on a successful Rails project for two years that's had to tackle these kinds of questions.  In this talk, I'll discuss my solutions to these problems so your project can be effective and efficient without any sacrifices.  I'll discuss how to install and manage RVM in firewalled environments, use Capistrano for remote deployments, how to test your email notifications when your SMTP server is locked down, how to use Git when no Git hosting is available, and plenty of other topics.</p>",
    "title": "Developing Rails Apps in Technical Isolation",
    "speaker": {
      "name": "Jesus Jackson",
      "description": "<p>Jesus Jackson is a software developer from Washington, DC.  He has been at Booz Allen Hamilton leading software teams and expanding Ruby and Rails knowledge throughout the company and its clients.  Jesus is very passionate about software development and is a strong advocate for Rails within government agencies.  He designed and hosted dozens of Ruby, Rails, and jQuery training seminars and was successful in starting and growing Rails projects on Java-based government contracts.  Jesus graduated from the University of Maryland with a BS in computer science and a minor in mathematics.  When he's not writing code, Jesus enjoys playing the drums, participating in community theater, traveling, and DC night life.</p>"
    },
    "uid": "talk-4",
    "location": "254",
    "starting_at": 1367442000000,
    "ending_at": 1367444400000
  },
  {
    "description": "<p>New developments, interesting use cases and future plans. Edward will walk attendees through the dashboard and demonstrate the uses of new features such as Engine Yard Local. Whether you're a long-time Engine Yard user or just curious, this session will show you how to optimize your deployment experience. </p>",
    "title": "Engine Yard Cloud",
    "speaker": {
      "name": "Edward Chiu",
      "description": "<p>Edward is a deployment engineer (better known as a PANDA) at Engine Yard based in San Francisco, CA. When he's not munching on bamboo, he's busy helping customers deploy and scale their web applications. </p><p>Before joining Engine Yard, Edward launched his own task management startup, sold industrial steam boilers, and learned Ruby on Rails at Code Academy in Chicago. </p><p>Edward is a huge Lakers fan and has recently developed a severe sleeping disorder in the wake of their making the playoffs.</p>"
    },
    "uid": "talk-59",
    "location": "P&S",
    "starting_at": 1367442000000,
    "ending_at": 1367444400000
  },
  {
    "location": "Intro",
    "starting_at": 1367445000000,
    "ending_at": 1367447400000,
    "title": "Intro Workshop: Crafting Gems",
    "description": "Pat Allan",
    "speaker": {
      "name": "Pat Allan"
    },
    "uid": "In1367445000000"
  },
  {
    "description": "<p>The good news: you're quickly signing up new customers, you've scaled your Rails app to a growing cluster of 10+ servers, and the business is really starting to take off. Great! The bad news: Just 30m of failures is starting to be measured in hundreds or even thousands of dollars. Who's going to make sure the lights stay on when your app is starting to fall over?  Or worse, what if your app is up, but sign-ups, payments, or some other critical function is broken?\n<br/><br/>Learn how you can build a robust monitoring infrastructure using the Sensu platform: track business metrics in all of your applications, any system metric on your servers, and do so all with the help of BatsD - a time series data store for real-time needs. We'll also talk about how to look at trending data and how you can integrate Sensu against PagerDuty, RabbitMQ, or any other third-party service. Oh, and of course - everything's written in Ruby, so you can even use your favorite gems!</p>",
    "title": "Keeping the lights on: Application monitoring with Sensu and BatsD",
    "speaker": {
      "name": "Aaron Pfeifer",
      "description": "<p>Aaron Pfeifer is a software engineer at Tapjoy, based out of Boston, MA, after having spent 5+ years building / scaling Rails apps at Viximo. </p><p>Aaron is best known as the author of the state_machine gem, part of his Ruby-based PluginAWeek project. He has been an avid member of the Ruby open-source community, emphasizing the importance of high standards, quality documentation, effective management, and commitment to providing support.</p><p>Aaron first joined the Ruby / Rails community in 2005 at RIT, attending class with the folks who built one of the first Ruby / Rails IDEs -- RadRails.</p>"
    },
    "uid": "talk-42",
    "location": "252+253",
    "starting_at": 1367445000000,
    "ending_at": 1367447400000
  },
  {
    "description": "<p>As your simple Rails app grows into a larger system or set of systems, using simple constants and Yaml files for configuration may no longer suffice.  The meaning of 'configuration' expands to include business logic alongside the customary hostnames and timeout intervals; the rate at which configuration changes are required increases; non-engineers begin to require the ability to make configuration changes themselves; different environments require different configurations.  This presentation will examine several patterns that can be applied to handle these issues, keeping iteration team high and reducing the burden on your engineering team.  We'll create and iterate on a simple game as a case study to illustrate the value of these principles in practice, and also look at a few open source projects that integrate some of these concepts.</p><p>Topics:\n<br/>* moving configuration values out of source\n<br/>* sharing configuration across multiple applications/services\n<br/>* working with sensitive configuration data (eg API keys)\n<br/>* dynamically updating configuration without deployments or restarts\n<br/>* cascading/overlaying configuration values based on environment and context\n<br/>* running experiments and A/B tests\n<br/>* change control\n<br/>* testing and multi-stage deployment of configuration changesets\n<br/>* allowing non-developers to change configuration values</p>",
    "title": "Configuration Management Patterns",
    "speaker": {
      "name": "Beau Harrington",
      "description": "<p>Beau Harrington serves as Chief Software Architect for Kabam Game Studios, overseeing development and driving innovation for Kabam's current and upcoming game titles. He led Kabam game integration efforts by creating Kabam's Pyramidâ„¢ technology framework that facilitates multi-platform development, production and distribution. Beau was previously Lead Developer and Development Director on the smash hit title Dragons of Atlantis, nominated for a Game Developer's Choice Online Award for Best Social Network Game.</p>"
    },
    "uid": "talk-24",
    "location": "255",
    "starting_at": 1367445000000,
    "ending_at": 1367447400000
  },
  {
    "description": "<p>Social app development challenges us to code for usersâ€™ personal world. Users are giving push-back to ill-fitted assumptions about their own identity â€” name, gender, sexual orientation, important relationships, and many other attributes that are individually meaningful.</p><p>How can we balance usersâ€™ realities with an appâ€™s business requirements?</p><p>Facebook, Google+, and others are struggling with these questions. Resilient approaches arise from an appâ€™s own foundation. Discover how our earliest choices influence codebase, UX, and development itself. Learn how we can use that knowledge to both inspire the people who use our apps, and to generate the data that need as developers.</p>",
    "title": "Schemas for the Real World",
    "speaker": {
      "name": "Carina C. Zona",
      "description": "<p>Before becoming an engineer and consultant, Carina C. Zona had an obscure career in television. She worked on â€œBaywatch\", and once gave a can of soda to Devo performer Mark Mothersbaugh. It was terribly exciting for one of them.</p><p>Carina is on the core teams for RailsBridge and Women Who Code, and organizes professional development events. She is also a certified sex educator. In her spare time, she engineers baked goods.</p>"
    },
    "uid": "talk-52",
    "location": "254",
    "starting_at": 1367445000000,
    "ending_at": 1367447400000
  },
  {
    "location": "",
    "starting_at": 1367447400000,
    "ending_at": 1367449200000,
    "title": "Afternoon break",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Af1367447400000"
  },
  {
    "location": "251+257+258",
    "starting_at": 1367449200000,
    "ending_at": 1367454600000,
    "title": "Lightning talks",
    "description": "Sign up at http://lightning2013.herokuapp.com/",
    "speaker": {
      "name": "Sign up at http://lightning2013.herokuapp.com/"
    },
    "uid": "Li1367449200000"
  },
  {
    "location": "251+257+258",
    "starting_at": 1367455500000,
    "ending_at": 1367458200000,
    "title": "Evening announcements and the Ruby Hero Awards",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Ev1367455500000"
  },
  {
    "description": "<p>Register at Heroku's booth #123 or at https://tito.io/jumpstart-lab/heroku-performance-workshop-railsconf-2013</p><p>Jeff Casamir &amp; Katrina Owen will show you how to take advantage of the advance features of Heroku and Rails 4 to create super-performant apps. Once youâ€™ve picked up some new pro techniques, put your skills to the test in our performance contest. Food and beverage provided.\n</p>",
    "title": "Heroku/JumpStart Lab Performance Workshop",
    "speaker": {
      "name": "",
      "description": "<p/>"
    },
    "uid": "talk-70",
    "location": "D136",
    "starting_at": 1367460000000,
    "ending_at": 1367470800000
  },
  {
    "description": "<p>Nearly every developer will be asked to present to his or her peers at some point. Those that do it well will tend to have an outsized influence on their team, company, and community.</p><p>This talk will demonstrate (mostly by example) the straightforward techniques for giving excellent presentations, from a veteran conference speaker and teacher. </p><p>Topics to cover include:\n<br/>* Phrases that turn your audience against you.\n<br/>* Basic body language tips that affect perception.\n<br/>* How to be more interesting than the internet.\n<br/>* The power of live coding and demos.\n<br/>* Being funny without resorting to reddit memes.\n<br/>* How to get plenty of questions during Q&amp;A.\n<br/>* How to get an unfair amount of talk acceptances (aka 'Bribing conference organizers').\n</p>",
    "title": "How to Talk to Developers",
    "speaker": {
      "name": "Ben Orenstein",
      "description": "<p>Ben loves traveling light, wearing wool, and sharing what he knows about programming. He works at thoughtbot in Boston.</p><p>You might know him as host of the Giant Robots Podcast, a fervent vim evangelist, or preacher of the virtues of live coding.</p>"
    },
    "uid": "talk-36",
    "location": "252+253",
    "starting_at": 1367515800000,
    "ending_at": 1367518200000
  },
  {
    "description": "<p>Datomic is a new database categorized as NewSQL and was created by Rich Hickey. Everybody knows this big name and thinks of Clojure. It is true Datomic fits well to Clojure programming. However, it is not only for Clojure people. \n<br/>Absolutely, Rubyists can use it. We have Diametric gem (https://github.com/relevance/diametric). Using Diametric, we can dive into Datomic from Ruby, from Rails.</p><p>On Diametric, Datomic's entity is an ActiveModel compliant. Diametric supports Rails' scaffolding. Its usage might look like Datamapper or MongoDB.  Eventually, Diametricâ€™s API design settled in a bit far from Ruby, Rails style. In another word, it is not ORM-like. Even though the API design may puzzle Rubyists, Diametric chose the one to expose Datomic's intrinsic properties. It is to leverage a good side of Datomic for us. I believe the more Rubyists use Diametric, the more they like it.</p><p>In my talk, Iâ€™ll introduce Diametric gem and how to use it as well as why its API design is good for us. Also, I will cover how Ruby helped to integrate Datomic API in Diametric gem.</p>",
    "title": "Datomic, from Ruby, from Rails",
    "speaker": {
      "name": "Yoko Harada",
      "description": "<p>Yoko Harada\n<br/>@yokolet\n<br/>Yoko is an Open Source contributer. She has worked for JRuby and Nokogiri as a committer for years . Also, she has been contributed to Ruby community. Last fall, Yoko organized the first RailsGirls Tokyo, and try(:english) at Sapporo RubyKaigi.\n<br/>Now, she works for Relevance, Inc. as a developer and enjoys polyglot programming of Ruby, Java and Clojure.</p>"
    },
    "uid": "talk-23",
    "location": "254",
    "starting_at": 1367515800000,
    "ending_at": 1367518200000
  },
  {
    "description": "<p>Explore tips to upgrade from each major version to the other, and how to efficiently tackle a 1.2 -&gt; 4.0 upgrade through two different case studies.</p><p>The velocity of change for Rails versions has a side effect -- businesses hesitate to update to the latest version until their productivity drops and they're forced to update. What happens then? Let's explore a case study of a Rails app that followed this pattern. </p>",
    "title": "The Long Ball - Upgrading long lived Rails apps from 1.x-4.0",
    "speaker": {
      "name": "Jesse Wolgamott",
      "description": "<p>Jesse is a Ruby fullstack freelance developer in Houston for Comal Productions. He created rubyfiddle.com and runs rubyoffrails.com.</p><p>He blogs at jessewolgamott.com and has been a ruby lover since seeing find_by_username in Rails 1.2.1. He ran a BBS in the early 1990â€˜s and loved configuring the family 8086 menu system in DOS. Jesse creates software at Comal Productions, trains developers on the happiness of Ruby, and runs RubyOffRails.com - a ruby training program.</p>"
    },
    "uid": "talk-41",
    "location": "255",
    "starting_at": 1367515800000,
    "ending_at": 1367518200000
  },
  {
    "description": "<p>As Ruby Developer I've had a pretty involved relationship with my Mac. I own iPads and iPhones since Apple started to make them. A few years back I told myself I was going to build apps for the Mac/iPhone/iPad but then reality sunk in when I started learning Objective-C and using XCode. The environment (and the language) felt like a trip back to 1995. </p><p>If you are a Web developer used to working with dynamically-typed, lightweight languages, following agile practices like Test-Driven Development, and comfortable with a Unix Shell, then jumping into a development world with an ugly cousin of C++ and an IDE that looks like an F16 cockpit just doesnâ€™t seem appealing.</p><p>Luckily for us there is an alternative in RubyMotion, a Ruby-based toolchain for iOS that brings a Ruby on Rails style of development to the world of iOS application development.</p><p>In this talk I will show you how you can use well engrained Ruby practices like TDD to build iOS Apps with RubyMotion.</p>",
    "title": "TDDing iOS Apps for fun and profit with RubyMotion",
    "speaker": {
      "name": "Brian Sam-Bodden",
      "description": "<p>Brian Sam-Bodden is an author, instructor, speaker and hacker that has spent most of his life crafting software. Heâ€™s a liberal arts educated fool and holds dual bachelor degrees from Ohio Wesleyan University in Computer Science and Physics and heads Integrallis http://www.integrallis.com a Ruby/Rails/Clojure/iOS sofware consultancy in Scottsdale, Arizona. He is a frequent speaker at user groups and conferences nationally and abroad. Brian is avid open source contributor and the author of \"Beginning POJOs: Spring, Hibernate, JBoss and Tapestry\", co-author of the \"Enterprise Java Development on a Budget: Leveraging Java Open Source Technologies\" and a contributor to Oâ€™reillyâ€™s \"97 Things Every Project Manager Should Know\"'.</p>"
    },
    "uid": "talk-37",
    "location": "254",
    "starting_at": 1367518800000,
    "ending_at": 1367521200000
  },
  {
    "description": "<p>Underneath the beautiful veneer of our Ruby libraries lies a twisted tangle of writhing guts. Maybe you're curious how the pieces fit together or maybe you're tracking down a bug, either way it's easy to get lost in the blood and bile that ties our code together. In this talk you'll learn how to use simple and sharp Ruby tools to slice into large libraries with surgical precision. We'll do some live hacking on Rails on the stage and cover useful code probing techniques. Turn your impossible bugs into pull requests, and level up your programming skills by Dissecting Ruby with Ruby.\n</p>",
    "title": "Dissecting Ruby with Ruby",
    "speaker": {
      "name": "Richard Schneeman",
      "description": "<p>Richard \"[@schneems](http://twitter.com/schneems)\" writes Ruby at Heroku at teaches Rails at the University of Texas. When he isn't obsessively compulsively playing Starcraft 2 he writes such gems as [Wicked](https://github.com/schneems/wicked), [Sextant](https://github.com/schneems/sextant), and [oPRO](https://github.com/opro/opro). Richard is a proud graduate of Space Camp and an advocate of home brewed beer.\n</p>"
    },
    "uid": "talk-11",
    "location": "252+253",
    "starting_at": 1367518800000,
    "ending_at": 1367521200000
  },
  {
    "description": "<p>Coming from a hacker background, Iâ€™ve continually been surprised by how frequently new grads lacked the skills needed, particularly in community learning. When I was asked to teach Ruby on Rails at Columbia University I observed that a significant number of the skills required to become successful professionals in the industry are acquired on the job and arenâ€™t being taught in school. </p><p>This presentation will review:\n<br/>    - Lessons learned from the experience teaching in my alma materâ€™s CS program. \n<br/>    - How I developed a hacker-centric curriculum teaching not only the algorithms, but the keys to being a successful developer in the modern open source driven Rails community. \n<br/>    - How we as hackers can fix this.</p>",
    "title": "Hacking the academic experience",
    "speaker": {
      "name": "Emily Stolfo",
      "description": "<p>Emily is an Engineer / Evangelist with the MongoDB Ruby driver team at 10gen. Before joining 10gen, Emily worked as a Ruby on Rails developer at a tech startup that sells limited edition art but her history with Rails goes back to a research project at Paris' Louvre Museum. In addition to enjoying programming and art, Emily likes to hike and run and teaches Ruby on Rails at Columbia University.</p>"
    },
    "uid": "talk-47",
    "location": "255",
    "starting_at": 1367518800000,
    "ending_at": 1367521200000
  },
  {
    "location": "",
    "starting_at": 1367521200000,
    "ending_at": 1367528400000,
    "title": "Lunch",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Lu1367521200000"
  },
  {
    "location": "251+257+258",
    "starting_at": 1367528400000,
    "ending_at": 1367533800000,
    "title": "Closing announcements and keynote",
    "description": "Aaron Patterson",
    "speaker": {
      "name": "Aaron Patterson"
    },
    "uid": "Cl1367528400000"
  },
  {
    "location": "",
    "starting_at": 1367533800000,
    "ending_at": 1367537400000,
    "title": "Ice cream social",
    "description": "",
    "speaker": {
      "name": ""
    },
    "uid": "Ic1367533800000"
  }
];