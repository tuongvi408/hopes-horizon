
const data = {
    "president": [
        {
            "text": "A report reveals a significant gender pay gap in your government departments. How do you address it?",
            "options": [
                {
                    "text": "Implement equal pay laws across all departments (wealth -10, happiness +15, trust +10)",
                    "effects": { "wealth": -10, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Ignore the report and keep the status quo (wealth +10, happiness -10, trust -5)",
                    "effects": { "wealth": 10, "happiness": -10, "trust": -5 }
                },
                {
                    "text": "Establish a task force to investigate (wealth -5, happiness +5, trust +5)",
                    "effects": { "wealth": -5, "happiness": 5, "trust": 5 }
                }
            ]
        },
        {
            "text": "There is growing pressure to increase the number of women in leadership positions within the government. What do you do?",
            "options": [
                {
                    "text": "Mandate quotas for women in senior government roles (wealth -5, happiness +10, trust +15)",
                    "effects": { "wealth": -5, "happiness": 10, "trust": 15 }
                },
                {
                    "text": "Encourage voluntary changes without enforcing quotas (wealth +5, happiness +5, trust +5)",
                    "effects": { "wealth": 5, "happiness": 5, "trust": 5 }
                },
                {
                    "text": "Reject the initiative and maintain the current system (wealth +10, happiness -10, trust -5)",
                    "effects": { "wealth": 10, "happiness": -10, "trust": -5 }
                }
            ]
        },
        {
            "text": "A local movement demands better access to reproductive health services for women. How do you respond?",
            "options": [
                {
                    "text": "Provide government funding for women's health services (wealth -5, happiness +15, trust +10)",
                    "effects": { "wealth": -5, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Allow private clinics to take the lead on providing these services (wealth +10, happiness -5, trust -5)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": -5 }
                },
                {
                    "text": "Oppose increased access, citing budget constraints (wealth +20, happiness -15, trust -10)",
                    "effects": { "wealth": 20, "happiness": -15, "trust": -10 }
                }
            ]
        },
        {
            "text": "Reports show that girls' education is underfunded in rural areas. What is your plan?",
            "options": [
                {
                    "text": "Increase funding for girls' education in rural areas (wealth -15, happiness +20, trust +10)",
                    "effects": { "wealth": -15, "happiness": 20, "trust": 10 }
                },
                {
                    "text": "Encourage private organizations to address the issue (wealth +5, happiness +5, trust +5)",
                    "effects": { "wealth": 5, "happiness": 5, "trust": 5 }
                },
                {
                    "text": "Delay funding due to other priorities (wealth +10, happiness -5, trust -5)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": -5 }
                }
            ]
        },
        {
            "text": "A major corporation in the country has been found guilty of gender discrimination in hiring. How do you handle it?",
            "options": [
                {
                    "text": "Implement strict laws against gender discrimination in hiring (wealth -10, happiness +10, trust +15)",
                    "effects": { "wealth": -10, "happiness": 10, "trust": 15 }
                },
                {
                    "text": "Offer incentives for companies to voluntarily adopt gender-inclusive hiring practices (wealth -5, happiness +5, trust +10)",
                    "effects": { "wealth": -5, "happiness": 5, "trust": 10 }
                },
                {
                    "text": "Let companies self-regulate and resist any new laws (wealth +15, happiness -10, trust -5)",
                    "effects": { "wealth": 15, "happiness": -10, "trust": -5 }
                }
            ]
        },
        {
            "text": "You are considering signing a trade deal with a country known for its human rights violations. What do you do?",
            "options": [
                {
                    "text": "Sign the deal for economic gain (wealth +20, happiness -10, trust -5)",
                    "effects": { "wealth": 20, "happiness": -10, "trust": -5 }
                },
                {
                    "text": "Reject the deal to maintain ethical standards (wealth -10, happiness +15, trust +10)",
                    "effects": { "wealth": -10, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Delay the decision for further negotiations (wealth +5, happiness +5, trust +5)",
                    "effects": { "wealth": 5, "happiness": 5, "trust": 5 }
                }
            ]
        },
        {
            "text": "A large tech company proposes to build a massive AI-based infrastructure that could replace many jobs. How do you respond?",
            "options": [
                {
                    "text": "Support the project for economic growth (wealth +10, happiness -10, trust -5)",
                    "effects": { "wealth": 10, "happiness": -10, "trust": -5 }
                },
                {
                    "text": "Oppose the project to protect human jobs (wealth -5, happiness +15, trust +10)",
                    "effects": { "wealth": -5, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Encourage hybrid solutions to balance jobs and technology (wealth +5, happiness +5, trust +5)",
                    "effects": { "wealth": 5, "happiness": 5, "trust": 5 }
                }
            ]
        },
        {
            "text": "Your government is criticized for not addressing climate change adequately. How do you respond?",
            "options": [
                {
                    "text": "Pass aggressive environmental regulations (wealth -15, happiness +20, trust +10)",
                    "effects": { "wealth": -15, "happiness": 20, "trust": 10 }
                },
                {
                    "text": "Invest in green technology without strict regulations (wealth -5, happiness +10, trust +5)",
                    "effects": { "wealth": -5, "happiness": 10, "trust": 5 }
                },
                {
                    "text": "Delay climate action due to economic concerns (wealth +10, happiness -10, trust -5)",
                    "effects": { "wealth": 10, "happiness": -10, "trust": -5 }
                }
            ]
        },
        {
            "text": "Your country has been criticized for its handling of illegal immigration. What is your approach?",
            "options": [
                {
                    "text": "Tighten immigration laws and enforcement (wealth +10, happiness -5, trust -10)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": -10 }
                },
                {
                    "text": "Provide pathways to citizenship for immigrants (wealth -10, happiness +20, trust +15)",
                    "effects": { "wealth": -10, "happiness": 20, "trust": 15 }
                },
                {
                    "text": "Increase support for illegal immigrants without offering citizenship (wealth -5, happiness +10, trust +5)",
                    "effects": { "wealth": -5, "happiness": 10, "trust": 5 }
                }
            ]
        },
        {
            "text": "The economy is showing signs of recession. How do you respond?",
            "options": [
                {
                    "text": "Stimulate the economy with massive public spending (wealth -20, happiness +15, trust +10)",
                    "effects": { "wealth": -20, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Cut spending to reduce debt (wealth +10, happiness -10, trust -5)",
                    "effects": { "wealth": 10, "happiness": -10, "trust": -5 }
                },
                {
                    "text": "Focus on attracting foreign investment (wealth +15, happiness -5, trust +5)",
                    "effects": { "wealth": 15, "happiness": -5, "trust": 5 }
                }
            ]
        },
        {
            "text": "A new international law has passed that requires your country to accept more refugees. How do you respond?",
            "options": [
                {
                    "text": "Accept the refugees and provide full support (wealth -10, happiness +15, trust +5)",
                    "effects": { "wealth": -10, "happiness": 15, "trust": 5 }
                },
                {
                    "text": "Accept the refugees but limit their benefits (wealth -5, happiness +5, trust +10)",
                    "effects": { "wealth": -5, "happiness": 5, "trust": 10 }
                },
                {
                    "text": "Reject the refugees to maintain national security (wealth +15, happiness -10, trust -15)",
                    "effects": { "wealth": 15, "happiness": -10, "trust": -15 }
                }
            ]
        },
        {
            "text": "You’re facing a trade war with another country. What’s your approach?",
            "options": [
                {
                    "text": "Impose tariffs to protect local industries (wealth +10, happiness -5, trust -5)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": -5 }
                },
                {
                    "text": "Negotiate a trade deal to reduce tariffs (wealth -5, happiness +10, trust +15)",
                    "effects": { "wealth": -5, "happiness": 10, "trust": 15 }
                },
                {
                    "text": "Escalate the trade war to assert dominance (wealth +20, happiness -15, trust -10)",
                    "effects": { "wealth": 20, "happiness": -15, "trust": -10 }
                }
            ]
        },
        {
            "text": "You’re facing a trade war with another country. What’s your approach?",
            "options": [
                {
                    "text": "Impose tariffs to protect local industries (wealth +10, happiness -5, trust -5)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": -5 }
                },
                {
                    "text": "Negotiate a trade deal to reduce tariffs (wealth -5, happiness +10, trust +15)",
                    "effects": { "wealth": -5, "happiness": 10, "trust": 15 }
                },
                {
                    "text": "Escalate the trade war to assert dominance (wealth +20, happiness -15, trust -10)",
                    "effects": { "wealth": 20, "happiness": -15, "trust": -10 }
                }
            ]
        },
        {
            "text": "There is increasing pressure to appoint more women to leadership positions within your government. How do you respond?",
            "options": [
                {
                    "text": "Mandate gender quotas in leadership roles (wealth -10, happiness +15, trust +10)",
                    "effects": { "wealth": -10, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Encourage voluntary change with incentives for gender parity (wealth -5, happiness +10, trust +5)",
                    "effects": { "wealth": -5, "happiness": 10, "trust": 5 }
                },
                {
                    "text": "Reject the call for gender quotas and maintain the status quo (wealth +10, happiness -10, trust -5)",
                    "effects": { "wealth": 10, "happiness": -10, "trust": -5 }
                }
            ]
        },
        {
            "text": "Your government has been criticized for its lack of women in leadership positions. How do you address this issue?",
            "options": [
                {
                    "text": "Appoint more women to senior government roles (wealth -5, happiness +20, trust +10)",
                    "effects": { "wealth": -5, "happiness": 20, "trust": 10 }
                },
                {
                    "text": "Offer training and mentorship programs for women leaders (wealth -10, happiness +15, trust +5)",
                    "effects": { "wealth": -10, "happiness": 15, "trust": 5 }
                },
                {
                    "text": "Maintain the current gender balance and focus on merit-based appointments (wealth +5, happiness -10, trust -5)",
                    "effects": { "wealth": 5, "happiness": -10, "trust": -5 }
                }
            ]
        }
    ],
    "governor": [
        {
            "text": "Your city is facing a significant budget shortfall. How do you prioritize spending?",
            "options": [
                {
                    "text": "Cut social programs to balance the budget (wealth +10, happiness -20, trust -10)",
                    "effects": { "wealth": 10, "happiness": -20, "trust": -10 }
                },
                {
                    "text": "Increase taxes to maintain services (wealth -5, happiness -10, trust +5)",
                    "effects": { "wealth": -5, "happiness": -10, "trust": 5 }
                },
                {
                    "text": "Seek private investment for public infrastructure (wealth +15, happiness +5, trust +10)",
                    "effects": { "wealth": 15, "happiness": 5, "trust": 10 }
                }
            ]
        },
        {
            "text": "You are faced with rising crime in your city. What is your response?",
            "options": [
                {
                    "text": "Increase police presence and surveillance (wealth -5, happiness -10, trust -5)",
                    "effects": { "wealth": -5, "happiness": -10, "trust": -5 }
                },
                {
                    "text": "Focus on education and job programs to address the root causes of crime (wealth -10, happiness +10, trust +10)",
                    "effects": { "wealth": -10, "happiness": 10, "trust": 10 }
                },
                {
                    "text": "Use military support to control the situation (wealth +5, happiness -15, trust -10)",
                    "effects": { "wealth": 5, "happiness": -15, "trust": -10 }
                }
            ]
        },
        {
            "text": "The city has a growing homelessness problem. What steps do you take?",
            "options": [
                {
                    "text": "Increase funding for shelters and social services (wealth -15, happiness +20, trust +10)",
                    "effects": { "wealth": -15, "happiness": 20, "trust": 10 }
                },
                {
                    "text": "Encourage private partnerships for affordable housing (wealth +10, happiness +5, trust +10)",
                    "effects": { "wealth": 10, "happiness": 5, "trust": 10 }
                },
                {
                    "text": "Reduce the number of shelters and focus on enforcement (wealth +20, happiness -10, trust -15)",
                    "effects": { "wealth": 20, "happiness": -10, "trust": -15 }
                }
            ]
        },
        {
            "text": "Your city is suffering from severe air pollution. How do you tackle this issue?",
            "options": [
                {
                    "text": "Introduce stricter emissions regulations (wealth -10, happiness +15, trust +10)",
                    "effects": { "wealth": -10, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Encourage green technology through incentives (wealth -5, happiness +5, trust +5)",
                    "effects": { "wealth": -5, "happiness": 5, "trust": 5 }
                },
                {
                    "text": "Do nothing and focus on economic growth (wealth +15, happiness -10, trust -10)",
                    "effects": { "wealth": 15, "happiness": -10, "trust": -10 }
                }
            ]
        },
        {
            "text": "The population of your city is growing rapidly. How do you address urban expansion?",
            "options": [
                {
                    "text": "Build high-density housing and expand public transport (wealth -20, happiness +10, trust +5)",
                    "effects": { "wealth": -20, "happiness": 10, "trust": 5 }
                },
                {
                    "text": "Encourage suburban development and reduce urban sprawl (wealth +10, happiness -5, trust +5)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": 5 }
                },
                {
                    "text": "Limit new development to maintain city charm (wealth +5, happiness -10, trust -5)",
                    "effects": { "wealth": 5, "happiness": -10, "trust": -5 }
                }
            ]
        },
        {
            "text": "A major corporation wants to build a factory in your city, but it could harm the local environment. What do you do?",
            "options": [
                {
                    "text": "Approve the project for job creation (wealth +15, happiness -5, trust -5)",
                    "effects": { "wealth": 15, "happiness": -5, "trust": -5 }
                },
                {
                    "text": "Reject the project to protect the environment (wealth -10, happiness +15, trust +20)",
                    "effects": { "wealth": -10, "happiness": 15, "trust": 20 }
                },
                {
                    "text": "Negotiate with the corporation to minimize environmental impact (wealth +5, happiness +5, trust +10)",
                    "effects": { "wealth": 5, "happiness": 5, "trust": 10 }
                }
            ]
        },
        {
            "text": "You are considering a new development project that could displace several low-income families. How do you handle the situation?",
            "options": [
                {
                    "text": "Go ahead with the project for economic growth (wealth +20, happiness -20, trust -15)",
                    "effects": { "wealth": 20, "happiness": -20, "trust": -15 }
                },
                {
                    "text": "Cancel the project to protect the displaced families (wealth -10, happiness +25, trust +15)",
                    "effects": { "wealth": -10, "happiness": 25, "trust": 15 }
                },
                {
                    "text": "Offer compensation and relocation support to the displaced families (wealth -15, happiness +10, trust +10)",
                    "effects": { "wealth": -15, "happiness": 10, "trust": 10 }
                }
            ]
        },
        {
            "text": "Your city’s public transportation system is outdated and inefficient. What do you do?",
            "options": [
                {
                    "text": "Invest heavily in upgrading the public transport system (wealth -30, happiness +25, trust +10)",
                    "effects": { "wealth": -30, "happiness": 25, "trust": 10 }
                },
                {
                    "text": "Introduce private companies to handle transportation (wealth +10, happiness -5, trust -10)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": -10 }
                },
                {
                    "text": "Do nothing and continue with the current system (wealth +5, happiness -10, trust -5)",
                    "effects": { "wealth": 5, "happiness": -10, "trust": -5 }
                }
            ]
        },
        {
            "text": "Your city faces a housing crisis with many people unable to afford homes. What do you do?",
            "options": [
                {
                    "text": "Build affordable housing with government funding (wealth -20, happiness +15, trust +10)",
                    "effects": { "wealth": -20, "happiness": 15, "trust": 10 }
                },
                {
                    "text": "Encourage private developers to build affordable housing (wealth +10, happiness +5, trust +5)",
                    "effects": { "wealth": 10, "happiness": 5, "trust": 5 }
                },
                {
                    "text": "Do nothing and let the market solve the issue (wealth +15, happiness -15, trust -10)",
                    "effects": { "wealth": 15, "happiness": -15, "trust": -10 }
                }
            ]
        },
        {
            "text": "There is increasing political pressure to reduce carbon emissions. What’s your approach?",
            "options": [
                {
                    "text": "Implement strict environmental regulations (wealth -15, happiness +20, trust +15)",
                    "effects": { "wealth": -15, "happiness": 20, "trust": 15 }
                },
                {
                    "text": "Introduce gradual measures to reduce emissions (wealth -10, happiness +10, trust +5)",
                    "effects": { "wealth": -10, "happiness": 10, "trust": 5 }
                },
                {
                    "text": "Do nothing to maintain economic growth (wealth +15, happiness -10, trust -10)",
                    "effects": { "wealth": 15, "happiness": -10, "trust": -10 }
                }
            ]
        },
        {
            "text": "The city’s infrastructure is deteriorating rapidly. What do you do?",
            "options": [
                {
                    "text": "Invest heavily in repairing and upgrading infrastructure (wealth -25, happiness +20, trust +15)",
                    "effects": { "wealth": -25, "happiness": 20, "trust": 15 }
                },
                {
                    "text": "Raise taxes to fund infrastructure repairs (wealth +5, happiness -5, trust +5)",
                    "effects": { "wealth": 5, "happiness": -5, "trust": 5 }
                },
                {
                    "text": "Delay repairs and focus on other priorities (wealth +15, happiness -10, trust -5)",
                    "effects": { "wealth": 15, "happiness": -10, "trust": -5 }
                }
            ]
        },
        {
            "text": "A protest is growing in the city over affordable healthcare. How do you respond?",
            "options": [
                {
                    "text": "Increase funding for public healthcare (wealth -20, happiness +25, trust +20)",
                    "effects": { "wealth": -20, "happiness": 25, "trust": 20 }
                },
                {
                    "text": "Encourage private healthcare providers to offer lower prices (wealth +10, happiness -5, trust +5)",
                    "effects": { "wealth": 10, "happiness": -5, "trust": 5 }
                },
                {
                    "text": "Do nothing and let the issue resolve itself (wealth +5, happiness -10, trust -10)",
                    "effects": { "wealth": 5, "happiness": -10, "trust": -10 }
                }
            ]
        },
        {
            "text": "Your city has a rising crime rate in certain areas. What action do you take?",
            "options": [
                {
                    "text": "Increase police presence and surveillance (wealth -5, happiness -10, trust -5)",
                    "effects": { "wealth": -5, "happiness": -10, "trust": -5 }
                },
                {
                    "text": "Invest in community programs to prevent crime (wealth -10, happiness +10, trust +10)",
                    "effects": { "wealth": -10, "happiness": 10, "trust": 10 }
                },
                {
                    "text": "Declare martial law and increase security measures (wealth +10, happiness -15, trust -10)",
                    "effects": { "wealth": 10, "happiness": -15, "trust": -10 }
                }
            ]
        }
    ],
    "businessman": [
        {
            "text": "A report shows that women in your company are earning less than their male counterparts. What do you do?",
            "options": [
                {
                    "text": "Equalize pay immediately (wealth -5, happiness +10)",
                    "effects": { "wealth": -5, "happiness": 10 }
                },
                {
                    "text": "Gradually raise women’s pay over the next few years (wealth -2, happiness +5)",
                    "effects": { "wealth": -2, "happiness": 5 }
                },
                {
                    "text": "Ignore the issue, focusing on business growth (wealth +10, happiness -5)",
                    "effects": { "wealth": 10, "happiness": -5 }
                }
            ]
        },
        {
            "text": "There is pressure to hire more women in leadership roles in your company. What do you do?",
            "options": [
                {
                    "text": "Promote women to leadership positions (wealth -5, happiness +10)",
                    "effects": { "wealth": -5, "happiness": 10 }
                },
                {
                    "text": "Wait for more qualified female candidates (wealth +10, happiness +5)",
                    "effects": { "wealth": 10, "happiness": 5 }
                },
                {
                    "text": "Stick to your current male-dominated leadership team (wealth +15, happiness -10)",
                    "effects": { "wealth": 15, "happiness": -10 }
                }
            ]
        },
        {
            "text": "Your employees, especially women, are asking for better parental leave policies. What do you do?",
            "options": [
                {
                    "text": "Implement generous paid parental leave (wealth -15, happiness +20)",
                    "effects": { "wealth": -15, "happiness": 20 }
                },
                {
                    "text": "Offer flexible work hours but no paid leave (wealth -5, happiness +10)",
                    "effects": { "wealth": -5, "happiness": 10 }
                },
                {
                    "text": "Keep parental leave as is (wealth +10, happiness -5)",
                    "effects": { "wealth": 10, "happiness": -5 }
                }
            ]
        },
        {
            "text": "Your company is struggling financially. What drastic measure do you take?",
            "options": [
                {
                    "text": "Lay off a large portion of the workforce (wealth +30, happiness -20)",
                    "effects": { "wealth": 30, "happiness": -20 }
                },
                {
                    "text": "Cut executive bonuses and reduce operational costs (wealth +10, happiness -10)",
                    "effects": { "wealth": 10, "happiness": -10 }
                },
                {
                    "text": "Invest heavily in marketing and expansion (wealth -20, happiness +5)",
                    "effects": { "wealth": -20, "happiness": 5 }
                }
            ]
        },
        {
            "text": "A key competitor is offering cheaper products by cutting corners on quality. What do you do?",
            "options": [
                {
                    "text": "Cut prices to compete, even if it means sacrificing quality (wealth +15, happiness -10)",
                    "effects": { "wealth": 15, "happiness": -10 }
                },
                {
                    "text": "Continue focusing on quality and innovation, even if it means higher prices (wealth -5, happiness +15)",
                    "effects": { "wealth": -5, "happiness": 15 }
                },
                {
                    "text": "Attempt to differentiate through customer service (wealth -10, happiness +5)",
                    "effects": { "wealth": -10, "happiness": 5 }
                }
            ]
        },
        {
            "text": "There is a push to implement more green initiatives in your company. How do you respond?",
            "options": [
                {
                    "text": "Invest in sustainable practices, even if it costs more (wealth -15, happiness +20)",
                    "effects": { "wealth": -15, "happiness": 20 }
                },
                {
                    "text": "Incorporate some green initiatives, but focus on profitability (wealth -5, happiness +10)",
                    "effects": { "wealth": -5, "happiness": 10 }
                },
                {
                    "text": "Ignore the green initiatives and maintain business as usual (wealth +10, happiness -5)",
                    "effects": { "wealth": 10, "happiness": -5 }
                }
            ]
        },
        {
            "text": "Your company is facing increasing scrutiny over its environmental impact. What is your course of action?",
            "options": [
                {
                    "text": "Implement full transparency and change operations (wealth -20, happiness +15)",
                    "effects": { "wealth": -20, "happiness": 15 }
                },
                {
                    "text": "Introduce small improvements while continuing operations as normal (wealth -10, happiness +5)",
                    "effects": { "wealth": -10, "happiness": 5 }
                },
                {
                    "text": "Maintain the current operations and ignore the scrutiny (wealth +15, happiness -10)",
                    "effects": { "wealth": 15, "happiness": -10 }
                }
            ]
        },
        {
            "text": "A large section of your company’s workforce is pushing for unionization. How do you handle this?",
            "options": [
                {
                    "text": "Allow the workers to unionize and negotiate (wealth -10, happiness +10)",
                    "effects": { "wealth": -10, "happiness": 10 }
                },
                {
                    "text": "Reject unionization and attempt to break up the movement (wealth +10, happiness -15)",
                    "effects": { "wealth": 10, "happiness": -15 }
                },
                {
                    "text": "Offer better employee benefits and incentives without unionization (wealth -5, happiness +20)",
                    "effects": { "wealth": -5, "happiness": 20 }
                }
            ]
        },
        {
            "text": "You are considering expanding your business into a new international market, but the regulations are uncertain. What do you do?",
            "options": [
                {
                    "text": "Proceed with the expansion despite the risks (wealth +15, happiness -10)",
                    "effects": { "wealth": 15, "happiness": -10 }
                },
                {
                    "text": "Delay expansion until regulations are clearer (wealth -5, happiness +5)",
                    "effects": { "wealth": -5, "happiness": 5 }
                },
                {
                    "text": "Cancel the expansion and focus on your current market (wealth +10, happiness +5)",
                    "effects": { "wealth": 10, "happiness": 5 }
                }
            ]
        },
        {
            "text": "The government introduces new taxes on businesses. What do you do?",
            "options": [
                {
                    "text": "Raise prices to offset the new taxes (wealth +5, happiness -10)",
                    "effects": { "wealth": 5, "happiness": -10 }
                },
                {
                    "text": "Cut employee benefits and wages to maintain profit margins (wealth +15, happiness -20)",
                    "effects": { "wealth": 15, "happiness": -20 }
                },
                {
                    "text": "Absorb the costs and maintain current prices (wealth -10, happiness +5)",
                    "effects": { "wealth": -10, "happiness": 5 }
                }
            ]
        },
        {
            "text": "Your company is being asked to address the increasing wealth inequality in the community. How do you respond?",
            "options": [
                {
                    "text": "Increase employee salaries and offer more benefits (wealth -20, happiness +15)",
                    "effects": { "wealth": -20, "happiness": 15 }
                },
                {
                    "text": "Create more job opportunities without increasing wages (wealth +10, happiness +5)",
                    "effects": { "wealth": 10, "happiness": 5 }
                },
                {
                    "text": "Do nothing and focus on maximizing profits (wealth +25, happiness -15)",
                    "effects": { "wealth": 25, "happiness": -15 }
                }
            ]
        },
        {
            "text": "There is an opportunity to merge with a larger company, but it may result in job cuts. What do you do?",
            "options": [
                {
                    "text": "Go ahead with the merger for growth (wealth +30, happiness -20)",
                    "effects": { "wealth": 30, "happiness": -20 }
                },
                {
                    "text": "Refuse the merger and focus on growing the company independently (wealth +10, happiness +5)",
                    "effects": { "wealth": 10, "happiness": 5 }
                },
                {
                    "text": "Offer voluntary severance packages to employees before the merger (wealth +20, happiness -10)",
                    "effects": { "wealth": 20, "happiness": -10 }
                }
            ]
        },
        {
            "text": "Your company has been accused of exploiting workers in developing countries. What do you do?",
            "options": [
                {
                    "text": "Address the issue and improve working conditions (wealth -10, happiness +20)",
                    "effects": { "wealth": -10, "happiness": 20 }
                },
                {
                    "text": "Pay a fine and continue with current practices (wealth +10, happiness -5)",
                    "effects": { "wealth": 10, "happiness": -5 }
                },
                {
                    "text": "Deny the accusations and continue as usual (wealth +15, happiness -10)",
                    "effects": { "wealth": 15, "happiness": -10 }
                }
            ]
        }
    ],
    "presidentEndings": [
        {
            "bg": "legendaryPresident",
            "title": "The Legendary President",
            "win": true,
            "condition": {
                "minWealth": 150,
                "maxWealth": null,
                "minHappiness": 80,
                "maxHappiness": null,
                "minTrust": 80,
                "maxTrust": null
            },
            "ending": "Congratulations, President! You’ve managed to create a prosperous, happy, and unified nation. Your policies have led to an unprecedented level of wealth, happiness, and trust. Citizens admire your leadership, and you will be remembered as one of the greatest presidents in history. Your legacy will inspire generations to come."
        },
        {
            "bg": "balancedLeader",
            "title": "The Balanced Leader",
            "win": true,

            "condition": {
                "minWealth": 100,
                "maxWealth": 150,
                "minHappiness": 50,
                "maxHappiness": 80,
                "minTrust": 50,
                "maxTrust": 80
            },
            "ending": "Well done, President. You've struck a decent balance between the nation's wealth, happiness, and trust. While you weren't able to make everyone entirely happy or wealthier, your leadership was fair, and the country is stable. People may not sing your praises, but they recognize your contributions. Your presidency will be seen as a period of solid growth and compromise."
        },
        {
            "bg": "ineffectivePresident",
            "title": "The Ineffective President",
            "win": false,
            "condition": {
                "minWealth": null,
                "maxWealth": 50,
                "minHappiness": null,
                "maxHappiness": 50,
                "minTrust": null,
                "maxTrust": 50
            },
            "ending": "Your presidency has been a disaster. The economy is struggling, citizens are discontent, and trust in your leadership is shattered. Your inability to address the needs of the people has left the nation in a state of chaos and disrepair. Your tenure will be remembered as a time of stagnation and missed opportunities, and your presidency will be seen as one of the least effective in history."
        },
    ],
    "governorEndings": [
        {
            "bg": "peopleChamp",
            "title": "The People’s Champion",
            "win": true,

            "condition": {
                "minWealth": null,
                "maxWealth": 50,
                "minHappiness": 80,
                "maxHappiness": null,
                "minTrust": 80,
                "maxTrust": null
            },
            "ending": "You’ve prioritized the well-being of the people above all else, and your citizens love you for it. Although the economy suffered due to some of your choices, your nation is united and your approval ratings are through the roof. History will remember you as a leader who put people before profit, a president who stood for equity and fairness."
        },
        {
            "bg": "unpopLeader",

            "title": "The Unpopular Leader",
            "win": false,

            "condition": {
                "minWealth": 50,
                "maxWealth": 150,
                "minHappiness": null,
                "maxHappiness": 50,
                "minTrust": null,
                "maxTrust": 50
            },
            "ending": "Despite your attempts to improve the country’s wealth, your leadership has been rejected by the people. Unpopular policies, corruption scandals, and a lack of empathy have created a toxic political climate. While you’ve made some financial gains, you’ve alienated the majority of your citizens. Your time in office will be remembered as a turbulent period with little regard for the welfare of the people."
        },
    ],
    "businessmanEndings": [
        {
            "bg": "economicTitan",

            "title": "The Economic Titan",
            "win": true,
            "condition": {
                "minWealth": 150,
                "maxWealth": null,
                "minHappiness": null,
                "maxHappiness": 50,
                "minTrust": null,
                "maxTrust": 50
            },
            "ending": "Congratulations on boosting the country’s economy, but at what cost? The people are unhappy, and trust in your leadership is at an all-time low. While your financial policies have led to significant wealth generation, your lack of empathy and disregard for public opinion has created a divided and disillusioned society. Your presidency will be remembered as a time of great prosperity for the elite but hardship for the average citizen."
        },
        {
            "bg": "compassLeader",

            "title": "The Compassionate Leader",
            "win": false,
            "condition": {
                "minWealth": null,
                "maxWealth": 50,
                "minHappiness": 80,
                "maxHappiness": null,
                "minTrust": 50,
                "maxTrust": null
            },
            "ending": "Your focus on the well-being of the citizens, especially the marginalized, has earned you their unwavering loyalty and affection. While your choices didn’t lead to substantial economic growth, your people are happier and more trusting of your leadership than ever. You may not have amassed great wealth for the country, but you’ve built a society where people feel heard, valued, and cared for."
        },
        {
            "bg": "radicalLeader",

            "title": "The Radical Leader",
            "win": true,
            "condition": {
                "minWealth": 150,
                "maxWealth": null,
                "minHappiness": 80,
                "maxHappiness": null,
                "minTrust": null,
                "maxTrust": 50
            },
            "ending": "Under your leadership, the country has thrived economically, and the public’s quality of life has improved dramatically. However, your bold decisions and radical policies have caused mistrust among the political elites and other influential groups. Your presidency will be marked by the tension between your great success in creating wealth and the underlying distrust you faced from both your allies and adversaries. You may have won the battle, but at a high cost to your political capital."
        }
    ]
}

let game = {
    month: 0,
    metrics: {
        trust: 50,
        economy: 50,
        happiness: 50,
        debt: 10
    },
    role: '',
    goal: null,
    turn: 0,
    maxMonths: 48, // 46 months, corresponding to 4 years
};



function startGame(role) {
    game.role = role;
    game.metrics = {
        trust: 50,
        economy: 50,
        happiness: 50,
        debt: 10
    };
    initializeGoal();
    document.getElementById('role').innerText = `Role: ${game.role}`;
    document.getElementById('intro').className = 'invisible';
    document.getElementById('gameplay').className = 'intial';
    updateUI();
}

function initializeGoal() {
    if (game.role === 'president') {
        game.goal = {
            description: "Get re-elected for the next term and create a lasting international reputation.",
            reElectionLikelihood: 50, // 50% chance to be re-elected at the start
            corruptionLevel: 0, // 0 means no corruption, higher values mean more corrupt
        };
    } else if (game.role === 'governor') {
        game.goal = {
            description: "Serve as governor and prepare to run for president.",
            communitySupport: 50, // Track how much community support they have
        };
    } else if (game.role === 'villager') {
        game.goal = {
            description: "Decide whether to focus on personal wealth or the welfare of the community.",
            personalWealth: 1000, // Start with a significant amount of wealth
            socialResponsibility: 50, // Track the balance between personal wealth and community welfare
        };
    }
}

function progressMonth() {
    game.month = game.month + 6;
    game.turn++;
    applyMonthlyChanges();
    triggerEvents();
    if (game.month > game.maxMonths) {
        console.log('time to end')
        const ending = checkGoalProgress();
        endGame(ending);
    } else {
        presentScenario(); // Present decision-making for the player
    }
    updateUI();
}

function applyMonthlyChanges() {
    // Example of monthly decay or changes
    game.metrics.happiness = Math.max(0, game.metrics.happiness - 2); // People are generally unhappy as time passes
    game.metrics.debt = Math.min(100, game.metrics.debt + 2); // Debt increases slowly

    if (game.role === 'president') {
        // President's decisions might influence trust and economy
        game.metrics.trust = Math.max(0, game.metrics.trust - 1);
    }

    if (game.role === 'governor') {
        // Governor's actions might influence local happiness and economy
        game.metrics.happiness = Math.max(0, game.metrics.happiness - 1);
    }
}

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function checkCondition(condition) {
    if (!!condition.minWealth && game.metrics.economy < condition.minWealth) {
        return false
    }
    if (!!condition.maxWealth && game.metrics.economy > condition.maxWealth) {
        return false
    }
    if (!!condition.minHappiness && game.metrics.happiness < condition.minHappiness) {
        return false
    }
    if (!!condition.maxHappiness && game.metrics.happiness > condition.maxHappiness) {
        return false
    }
    if (!!condition.minTrust && game.metrics.trust < condition.minTrust) {
        return false
    }
    if (!!condition.maxTrust && game.metrics.trust > condition.maxTrust) {
        return false
    }
    return true
}

function checkGoalProgress() {
    switch (game.role) {
        case 'president':
            for (let i = 0; i < data.presidentEndings.length; i++) {
                console.log(data.presidentEndings[i])
                if (checkCondition(data.presidentEndings[i].condition)) {
                    return data.presidentEndings[i]
                }
            }
            return data.presidentEndings[getRandomIndex(data.presidentEndings.length)]
            break;
        case 'governor':
            for (let i = 0; i < data.governorEndings.length; i++) {
                if (checkCondition(data.governorEndings[i].condition)) {
                    return data.governorEndings[i]
                }
            }
            return data.governorEndings[getRandomIndex(data.governorEndings.length)]

        case 'businessman':
            for (let i = 0; i < data.businessmanEndings.length; i++) {
                if (checkCondition(data.businessmanEndings[i].condition)) {
                    return data.businessmanEndings[i]
                }
            }
            return data.businessmanEndings[getRandomIndex(data.businessmanEndings.length)]

    }
}

function triggerEvents() {
    // Placeholder for random events (e.g., economic downturns, protests, etc.)
}

function presentScenario() {
    const scenarioText = document.getElementById('scenario-text');
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // Clear previous options

    // Role-based scenarios
    let scenario;
    let index = 0;

    if (game.role === 'president') {
        index = Math.floor(Math.random() * data.president.length);
        scenario = data.president[index];
    } else if (game.role === 'governor') {
        index = Math.floor(Math.random() * data.governor.length);
        scenario = data.governor[index];
    } else {
        index = Math.floor(Math.random() * data.businessman.length);
        scenario = data.businessman[index];
    }
    console.log(scenario)
    // Display scenario
    scenarioText.innerText = scenario.text;

    // Create buttons for each choice
    scenario.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = () => {
            applyEventEffects(option.effects);
            updateUI();
            scenarioText.innerText = '';
            optionsDiv.innerHTML = ''; // Clear options after choice
            document.getElementById('continue').className = 'initial';
        };
        optionsDiv.appendChild(button);
    });
    document.getElementById('continue').className = 'invisible';
}

function applyEventEffects(effects) {
    for (const [key, value] of Object.entries(effects)) {
        game.metrics[key] = game.metrics[key] + value;
    }
}

function updateUI() {
    
    document.getElementById('month').innerText = `Month: ${game.month}`;
    document.getElementById('turn').innerText = `Turn: ${game.turn}`;
    document.getElementById('trust').innerText = game.metrics.trust;
    document.getElementById('economy').innerText = game.metrics.economy;
    document.getElementById('happiness').innerText = game.metrics.happiness;
    document.getElementById('debt').innerText = game.metrics.debt;

    // const roleMetrics = document.getElementById('role-specific-metrics');
    // switch (game.role) {
    //     case 'president':
    //         roleMetrics.innerText = `Re-election Likelihood: ${game.goal.reElectionLikelihood}% | Corruption Level: ${game.goal.corruptionLevel}`;
    //         break;
    //     case 'governor':
    //         roleMetrics.innerText = `Community Support: ${game.goal.communitySupport}%`;
    //         break;
    //     case 'businessman':
    //         roleMetrics.innerText = `Personal Wealth: $${game.goal.personalWealth} | Social Responsibility: ${game.goal.socialResponsibility}%`;
    //         break;
    // }

}

function endGame(ending) {
    console.log(ending)
    const endingDiv = document.getElementById('ending')
    endingDiv.style.backgroundImage = `url('public/${ending.bg}.webp')`;
    endingDiv.className = '';
    document.getElementById('ending-title').innerText = ending.title;
    document.getElementById('ending-desc').innerText = ending.ending;
    document.getElementById('game').className = 'invisible';

    // if (game.goal.completed) {
    //     alert("You achieved your goal! Well done!");
    // } else {
    //     alert("Game over! You did not meet your goal.");
    // }
    resetGame();
}

function backToHome() {
    document.getElementById('ending').className = 'invisible';
    document.getElementById('thanks').className = '';

}

function resetGame() {
    game.month = 0;
    game.turn = 0
    game.metrics = { trust: 50, economy: 50, happiness: 50, debt: 10 };
    game.role = '';
    document.getElementById('role').innerText = `Role: ${game.role}`;
    document.getElementById('intro').className = 'unset';
    document.getElementById('gameplay').className = 'invisible';
}


