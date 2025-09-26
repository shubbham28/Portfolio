import React from 'react';

const stats = [
	{ label: 'Years Experience', value: 5, icon: '⏱️' },
	{ label: 'Projects Delivered', value: 20, icon: '🚀' },
	{ label: 'Publications', value: 5, icon: '📝' },
	{ label: 'AI Agents Built', value: 7, icon: '🤖' }
];

const About = () => {
	return (
		<section id="about" className="container-section py-32">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8 heading-gradient">About</h2>
				<p className="text-neutral-300 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
					PhD-level AI and Data Science professional with strong software engineering fundamentals and hands-on experience in building robust,
					real-time analytics systems. I specialize in Bayesian modeling, LLM-powered agents, cloud infrastructure (AWS/GCP), and agentic workflows
					using LangChain and HuggingFace. My name, Shubbham Gupta, reflects struggles and gratitude, qualities that guide my approach to solving
					complex problems with resilience, humility, and purpose. I am also a strong communicator and collaborator, with a proven track record of
					delivering impactful, stakeholder-aligned solutions across health tech, finance, and enterprise automation.
				</p>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
					{stats.map(s => (
						<div key={s.label} className="glass rounded-xl p-6 flex flex-col items-center text-center">
							<div className="text-2xl mb-2">{s.icon}</div>
							<div className="text-3xl font-semibold text-white">{s.value}</div>
							<div className="mt-1 text-[11px] tracking-wide text-neutral-400 uppercase">
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
