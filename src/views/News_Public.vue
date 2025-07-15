<template>
	<div class="news-page" :class="{ 'light-theme': activeTab === 'human' }">
		<!-- 全局白色背景层 -->
		<div v-if="activeTab === 'human'" class="global-white-background"></div>

		<!-- Masaigon风格背景动画 -->
		<!-- <MasaigonBackground 
			:animated="true"
			:intensity="0.6"
			theme="blue"
		/> -->

		<!-- 左侧导航栏 -->
		<SidebarMenu :active-nav-item="activeNavItem" :user-name="userName" :user-email="userEmail"
			:user-avatar="userAvatar" :theme="activeTab === 'human' ? 'white' : 'dark'" @nav-click="handleNavClick"
			@post-click="handlePostClick" @user-profile-click="handleUserProfileClick" />

		<!-- 中间内容区域 -->
		<div class="main-content">
			<!-- Tab 切换栏 -->
			<div class="tab-header">

				<div class="tab-buttons">
					<button :class="['tab-button', { active: activeTab === 'human' }]" @click="activeTab = 'human'">
						Human Observer
					</button>
					<button :class="['tab-button', { active: activeTab === 'ideal' }]" @click="activeTab = 'ideal'">
						Ideal Observer
					</button>
				</div>
			</div>

			<!-- Human Observer 内容 -->
			<div v-if="activeTab === 'human'" class="news-content">
				<!-- 新闻帖子样式 -->
				<div class="news-post">
					<div class="news-avatar">
						<img src="@/assets/news/Pub/a1.jpg" alt="News Author" />
					</div>
					<div class="news-main-content">
						<!-- 新闻标题 -->
						<div class="news-header">
							<!-- <div class="news-author-info">
								<div class="author-name">{{ userName }}</div>
								<div class="author-handle">@{{ userEmail.split('@')[0] }}</div>
								<div class="publish-time">7:11 AM · Feb 17, 2024</div>
							</div> -->
							<h1 class="news-title">Mental Health in Britain: Are We Misdiagnosing Distress?</h1>
							<div class="news-meta">
								<span class="news-summary">Daily social media users are 1.7x more likely to be diagnosed
									with a mental health condition than those who never use it.  </span>
							</div>
						</div>

						<!-- 新闻主图 -->
						<div class="news-main-image">
							<img src="@/assets/news/Pub/d15c53febec397126f9b147510ddd8cc8ae9833e.jpg"
								alt="Two women and a young girl embrace near the floral tributes to the young victims of the knife attack in Southport" />
							<div class="image-caption">
								Soldiers from the Army Air Corps on exercise last year. Credit: AirTpr David Allen AAC.
								Source MOD.
							</div>
						</div>

						<!-- 新闻正文 -->
						<div class="news-body">
							<p>
								A new report from the Centre for Social Justice (CSJ), titled Change the Prescription,
								offers a critical reassessment of how the UK is responding to what many describe as a
								deepening mental health crisis. Rather than attributing the surge solely to increasing
								illness, the report casts light on broader social and systemic factors—including what it
								describes as an over-medicalised approach to emotional hardship.
							</p>

							<p>
								The authors of the report set out to understand what lies behind the growing tide of
								mental ill-health across the country. They argue that while the current clinical
								framework has expanded access and reduced stigma, it may also have unintentionally
								obscured the core causes of many people’s distress. The prevailing medical model, the
								report contends, often fails to address the underlying issues and may not offer the most
								appropriate form of care.
							</p>

							<h3 class="section-title">GPs Echo Concerns</h3>

							<p>
								Frontline practitioners appear to share these reservations. According to polling
								commissioned by CSJ, 83% of general practitioners are concerned that antidepressants are
								too often prescribed when non-drug alternatives would be more appropriate, while 84%
								believe society’s mental health narrative increasingly treats ordinary emotional
								fluctuations as medical conditions.
							</p>

							<p>
								These figures are not just theoretical. The report presents a sobering statistical
								landscape: one in five people in the UK report receiving at least one mental health
								diagnosis, and nearly two million individuals are now in contact with mental health
								services in England—a 70% increase over the past eight years. Almost 20% of adults are
								now taking antidepressants, and among children and adolescents, the trend is even more
								dramatic.
							</p>

							<p>
								As of 2023, one in five children aged 8 to 16 are believed to have a probable mental
								health disorder, up sharply from 12.5% in 2017. If current trajectories hold, CSJ
								projects this number could rise to one in four by the end of the decade.
							</p>

							<h3 class="section-title">What’s Driving the Trend?</h3>

							<div class="news-list">
								<div class="story-item">
									While the report acknowledges that part of the increase reflects a genuine rise in
									need, it also suggests that other powerful forces are at play. It describes the
									long-term erosion of social supports—such as strong families, connected communities,
									and access to meaningful work—as having steadily weakened the population’s
									psychological resilience.
								</div>

								<div class="story-item">
									On top of this, the report identifies the COVID-19 pandemic and its aftermath as a
									“perfect storm” that accelerated isolation, digital dependency, and emotional
									vulnerability. During lockdowns, for many, “screens became the only form of
									connection,” the authors note.
								</div>

								<div class="story-item">
									But beyond these structural and contextual drivers, Change the Prescription brings a
									third explanation into focus: over-medicalisation. The report argues that viewing
									emotional distress primarily through a clinical lens may distort our understanding
									of mental health itself.
								</div>

								<h3 class="section-title">From Pathology to Prevention</h3>

								<div class="story-item">
									The authors stress that the number of diagnoses and prescriptions issued cannot
									fully explain the nation’s mental wellbeing—or lack thereof. Instead, they call for
									a realignment of priorities toward prevention, social intervention, and cultural
									clarity.
								</div>

								<div class="story-item">
									Among the key recommendations are strengthening families and education systems to
									promote early intervention, introducing a National Work and Health Service to
									reconnect individuals with purpose, and implementing a National Strategy for Social
									Prescribing, including targeted support for children and young people.
								</div>

								<div class="story-item">
									They also advocate for improvements to diagnostic and prescription practices in
									general practice, aiming to ensure that interventions are truly suited to the needs
									they address.
								</div>
							</div>

							<h3 class="section-title">Walking the Line Between Compassion and Overreach</h3>


							<p>
								In its concluding remarks, the report strikes a cautionary tone. While acknowledging the
								well-intentioned efforts to support mental health, it warns that the boundary between
								temporary distress and genuine disorder has become increasingly blurred.
							</p>

							<p>
								“This is not compassionate,” the report states. “It risks those who are unwell missing
								out on the treatment they deserve, and it risks burdening others with unhelpful labels
								and prescriptions that can hold them back without addressing the root cause of their
								very real needs.”
							</p>

							<p>
								Unless the UK takes a serious look at how it defines mental ill-health, incorporates
								broader social models, and honestly appraises the limits of the current medical system,
								the report suggests that true prevention will remain out of reach.
							</p>

							<div class="news-inline-image">

								<div class="inline-caption">
									Centre for Social Justice (2024). Change the Prescription: A new approach to mental
									health in the UK. [online] The Centre for Social Justice.
								</div>

								<div class="inline-caption">
									7:15AM · May 10. 2025
								</div>
							</div>


							<div class="social-media-posts">
								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a2.jpg" alt="JamesEllis" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">AoifeInLondon</div>
										</div>
										<div class="post-text" style="margin-top: 15px">Finally! A route that actually
											reflects how many of us live here already. Took them long enough.
											#Citizenship #IrishInUK</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M13.5 0C6.0561 0 0 6.0561 0 13.5C0 20.9439 6.0561 27 13.5 27C20.9439 27 27 20.9439 27 13.5C27 6.0561 20.9439 0 13.5 0ZM13.5 25.3125C6.98659 25.3125 1.6875 20.0134 1.6875 13.5C1.6875 6.98659 6.98659 1.6875 13.5 1.6875C20.0134 1.6875 25.3125 6.98659 25.3125 13.5C25.3125 20.0134 20.0134 25.3125 13.5 25.3125Z"
														fill="#8B8B8B" />
													<path
														d="M20.5093 16.832L14.344 13.0293V3.62988C14.344 3.16396 13.9662 2.78613 13.5002 2.78613C13.0343 2.78613 12.6565 3.16396 12.6565 3.62988V13.9711L19.6233 18.2683C19.7614 18.3533 19.9144 18.394 20.0655 18.394C20.3485 18.394 20.6249 18.2516 20.7843 17.993C21.029 17.5965 20.9058 17.0767 20.5093 16.832Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a3.jpg" alt="PriyaSinghLegal" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">BrexitWasBad</div>
										</div>
										<div class="post-text" style="margin-top: 15px">Handing out citizenships like
											Tesco Clubcards 🪪</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="31" height="26" viewBox="0 0 31 26" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M30.1511 16C29.667 16 29.2882 16.3838 29.2882 16.8705V21.0171C29.2882 22.812 27.8375 24.2574 26.076 24.2574H4.938C3.15868 24.2574 1.72586 22.812 1.72586 21.0171V16.8705C1.72586 16.3821 1.34538 16 0.862928 16C0.378826 16 0 16.3838 0 16.8705V21.0171C0 23.769 2.20996 26 4.93966 26H26.0598C28.7879 26 30.9995 23.7707 30.9995 21.0171V16.8705C31.0157 16.3838 30.6352 16 30.1511 16Z"
														fill="#8B8B8B" />
													<path
														d="M15.5081 19C15.9484 19 16.2929 18.6135 16.2929 18.1234V3.08683L19.6546 7.06881C19.8121 7.2448 20.0153 7.35007 20.22 7.35007C20.4085 7.35007 20.6131 7.27934 20.7545 7.105C21.0681 6.77111 21.0843 6.21024 20.7854 5.85992L16.0735 0.262752C15.7746 -0.0875839 15.2254 -0.0875839 14.9265 0.262752L10.2146 5.85992C9.91567 6.21025 9.93187 6.77278 10.2455 7.105C10.5591 7.43888 11.0627 7.42079 11.3601 7.07046L14.7218 3.08848V18.1233C14.7233 18.6135 15.0678 19 15.5081 19Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a4.jpg" alt="TomWDevon" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">MaryOConnorNI</div>
										</div>
										<div class="post-text" style="margin-top: 15px">I was born here. My husband’s
											Irish. We’ve paid taxes 20+ years. This isn’t a “gift,” it’s overdue
											recognition. #GoodFridayAgreement</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="31" height="26" viewBox="0 0 31 26" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M30.1511 16C29.667 16 29.2882 16.3838 29.2882 16.8705V21.0171C29.2882 22.812 27.8375 24.2574 26.076 24.2574H4.938C3.15868 24.2574 1.72586 22.812 1.72586 21.0171V16.8705C1.72586 16.3821 1.34538 16 0.862928 16C0.378826 16 0 16.3838 0 16.8705V21.0171C0 23.769 2.20996 26 4.93966 26H26.0598C28.7879 26 30.9995 23.7707 30.9995 21.0171V16.8705C31.0157 16.3838 30.6352 16 30.1511 16Z"
														fill="#8B8B8B" />
													<path
														d="M15.5081 19C15.9484 19 16.2929 18.6135 16.2929 18.1234V3.08683L19.6546 7.06881C19.8121 7.2448 20.0153 7.35007 20.22 7.35007C20.4085 7.35007 20.6131 7.27934 20.7545 7.105C21.0681 6.77111 21.0843 6.21024 20.7854 5.85992L16.0735 0.262752C15.7746 -0.0875839 15.2254 -0.0875839 14.9265 0.262752L10.2146 5.85992C9.91567 6.21025 9.93187 6.77278 10.2455 7.105C10.5591 7.43888 11.0627 7.42079 11.3601 7.07046L14.7218 3.08848V18.1233C14.7233 18.6135 15.0678 19 15.5081 19Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a2.jpg" alt="ConnorJLeaks" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">AoifeInLondon</div>
										</div>
										<div class="post-text" style="margin-top: 15px">Finally! A route that actually
											reflects how many of us live here already. Took them long enough.
											#Citizenship #IrishInUK</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="31" height="26" viewBox="0 0 31 26" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M30.1511 16C29.667 16 29.2882 16.3838 29.2882 16.8705V21.0171C29.2882 22.812 27.8375 24.2574 26.076 24.2574H4.938C3.15868 24.2574 1.72586 22.812 1.72586 21.0171V16.8705C1.72586 16.3821 1.34538 16 0.862928 16C0.378826 16 0 16.3838 0 16.8705V21.0171C0 23.769 2.20996 26 4.93966 26H26.0598C28.7879 26 30.9995 23.7707 30.9995 21.0171V16.8705C31.0157 16.3838 30.6352 16 30.1511 16Z"
														fill="#8B8B8B" />
													<path
														d="M15.5081 19C15.9484 19 16.2929 18.6135 16.2929 18.1234V3.08683L19.6546 7.06881C19.8121 7.2448 20.0153 7.35007 20.22 7.35007C20.4085 7.35007 20.6131 7.27934 20.7545 7.105C21.0681 6.77111 21.0843 6.21024 20.7854 5.85992L16.0735 0.262752C15.7746 -0.0875839 15.2254 -0.0875839 14.9265 0.262752L10.2146 5.85992C9.91567 6.21025 9.93187 6.77278 10.2455 7.105C10.5591 7.43888 11.0627 7.42079 11.3601 7.07046L14.7218 3.08848V18.1233C14.7233 18.6135 15.0678 19 15.5081 19Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="activeTab === 'ideal'" class="news-content">
				<!-- 新闻帖子样式 -->
				<div class="news-post">
					<div class="news-avatar">
						<img src="@/assets/news/Pub/a1.jpg" alt="News Author" />
					</div>
					<div class="news-main-content">
						<!-- 新闻标题 -->
						<div class="news-header">
							<!-- <div class="news-author-info">
								<div class="author-name">{{ userName }}</div>
								<div class="author-handle">@{{ userEmail.split('@')[0] }}</div>
								<div class="publish-time">7:11 AM · Feb 17, 2024</div>
							</div> -->
							<h1 class="news-title">Mental Health in Britain: Are We Misdiagnosing Distress?</h1>
							<div class="news-meta">
								<span class="news-summary">Daily social media users are 1.7x more likely to be diagnosed
									with a mental health condition than those who never use it.  </span>
							</div>
						</div>

						<!-- 新闻主图 -->
						<div class="news-main-image">
							<img src="@/assets/news/Pub/d15c53febec397126f9b147510ddd8cc8ae9833e.jpg"
								alt="Two women and a young girl embrace near the floral tributes to the young victims of the knife attack in Southport" />
							<div class="image-caption">
								Soldiers from the Army Air Corps on exercise last year. Credit: AirTpr David Allen AAC.
								Source MOD.
							</div>
						</div>

						<!-- 新闻正文 -->
						<div class="news-body">
							<div class="aly-text" @mouseenter="showAnalysis($event, '1')" @mouseleave="hideAnalysis">
								<p class="aly-text">
									A new report from the Centre for Social Justice (CSJ), titled Change the
									Prescription, offers a critical reassessment of how the UK is responding to what
									many describe as a deepening mental health crisis. Rather than attributing the surge
									solely to increasing illness, the report casts light on broader social and systemic
									factors—including what it describes as an over-medicalised approach to emotional
									hardship.
								</p>


							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '2')" @mouseleave="hideAnalysis">

								<p class="aly-text">
									The authors of the report set out to understand what lies behind the growing tide of
									mental ill-health across the country. They argue that while the current clinical
									framework has expanded access and reduced stigma, it may also have unintentionally
									obscured the core causes of many people’s distress. The prevailing medical model,
									the report contends, often fails to address the underlying issues and may not offer
									the most appropriate form of care.
								</p>
							</div>
							<h3 class="section-title">GPs Echo Concerns</h3>


							<div class="aly-text" @mouseenter="showAnalysis($event, '3')" @mouseleave="hideAnalysis">
								<p class="aly-text">
									Frontline practitioners appear to share these reservations. According to polling
									commissioned by CSJ, 83% of general practitioners are concerned that antidepressants
									are too often prescribed when non-drug alternatives would be more appropriate, while
									84% believe society’s mental health narrative increasingly treats ordinary emotional
									fluctuations as medical conditions.
								</p>
							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '4')" @mouseleave="hideAnalysis">

								<p class="aly-text">
									These figures are not just theoretical. The report presents a sobering statistical
									landscape: one in five people in the UK report receiving at least one mental health
									diagnosis, and nearly two million individuals are now in contact with mental health
									services in England—a 70% increase over the past eight years. Almost 20% of adults
									are now taking antidepressants, and among children and adolescents, the trend is
									even more dramatic.
								</p>
							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '5')" @mouseleave="hideAnalysis">


								<p class="aly-text">
									As of 2023, one in five children aged 8 to 16 are believed to have a probable mental
									health disorder, up sharply from 12.5% in 2017. If current trajectories hold, CSJ
									projects this number could rise to one in four by the end of the decade.
								</p>
							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '6')" @mouseleave="hideAnalysis">
								<p class="aly-text">
									As of 2023, one in five children aged 8 to 16 are believed to have a probable mental
									health disorder, up sharply from 12.5% in 2017. If current trajectories hold, CSJ
									projects this number could rise to one in four by the end of the decade.
								</p>

							</div>

							<h3 class="section-title">What’s Driving the Trend?</h3>

							<div class="aly-text" @mouseenter="showAnalysis($event, '7')" @mouseleave="hideAnalysis">

								<P class="aly-text">
									While the report acknowledges that part of the increase reflects a genuine rise in
									need, it also suggests that other powerful forces are at play. It describes the
									long-term erosion of social supports—such as strong families, connected communities,
									and access to meaningful work—as having steadily weakened the population’s
									psychological resilience.
								</P>

							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '8')" @mouseleave="hideAnalysis">
								<P class="aly-text">
									On top of this, the report identifies the COVID-19 pandemic and its aftermath as a
									“perfect storm” that accelerated isolation, digital dependency, and emotional
									vulnerability. During lockdowns, for many, “screens became the only form of
									connection,” the authors note.
								</P>

							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '9')" @mouseleave="hideAnalysis">

								<P class="aly-text">
									But beyond these structural and contextual drivers, Change the Prescription brings a
									third explanation into focus: over-medicalisation. The report argues that viewing
									emotional distress primarily through a clinical lens may distort our understanding
									of mental health itself.
								</P>
							</div>
							<h3 class="section-title">From Pathology to Prevention</h3>
							<div class="aly-text" @mouseenter="showAnalysis($event, '10')" @mouseleave="hideAnalysis">

								<P class="aly-text">
									The authors stress that the number of diagnoses and prescriptions issued cannot
									fully explain the nation’s mental wellbeing—or lack thereof. Instead, they call for
									a realignment of priorities toward prevention, social intervention, and cultural
									clarity.
								</P>

							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '11')" @mouseleave="hideAnalysis">

								<P class="aly-text">
									Among the key recommendations are strengthening families and education systems to
									promote early intervention, introducing a National Work and Health Service to
									reconnect individuals with purpose, and implementing a National Strategy for Social
									Prescribing, including targeted support for children and young people.
								</P>
							</div>

							<div class="aly-text" @mouseenter="showAnalysis($event, '12')" @mouseleave="hideAnalysis">
								<P class="aly-text">
									They also advocate for improvements to diagnostic and prescription practices in
									general practice, aiming to ensure that interventions are truly suited to the needs
									they address.
								</P>


							</div>


							<h3 class="section-title">Walking the Line Between Compassion and Overreach</h3>


							<p>
								In its concluding remarks, the report strikes a cautionary tone. While acknowledging the
								well-intentioned efforts to support mental health, it warns that the boundary between
								temporary distress and genuine disorder has become increasingly blurred.
							</p>

							<p>
								“This is not compassionate,” the report states. “It risks those who are unwell missing
								out on the treatment they deserve, and it risks burdening others with unhelpful labels
								and prescriptions that can hold them back without addressing the root cause of their
								very real needs.”
							</p>

							<p>
								Unless the UK takes a serious look at how it defines mental ill-health, incorporates
								broader social models, and honestly appraises the limits of the current medical system,
								the report suggests that true prevention will remain out of reach.
							</p>

							<div class="news-inline-image">

								<div class="inline-caption">
									Centre for Social Justice (2024). Change the Prescription: A new approach to mental
									health in the UK. [online] The Centre for Social Justice.
								</div>

								<div class="inline-caption">
									7:15AM · May 10. 2025
								</div>
							</div>


							<div class="social-media-posts">
								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a2.jpg" alt="JamesEllis" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">AoifeInLondon</div>
										</div>
										<div @mouseenter="showAnalysis($event, '13')" @mouseleave="hideAnalysis" class="post-text aly-text" style="margin-top: 15px">Finally! A route that actually
											reflects how many of us live here already. Took them long enough.
											#Citizenship #IrishInUK</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M13.5 0C6.0561 0 0 6.0561 0 13.5C0 20.9439 6.0561 27 13.5 27C20.9439 27 27 20.9439 27 13.5C27 6.0561 20.9439 0 13.5 0ZM13.5 25.3125C6.98659 25.3125 1.6875 20.0134 1.6875 13.5C1.6875 6.98659 6.98659 1.6875 13.5 1.6875C20.0134 1.6875 25.3125 6.98659 25.3125 13.5C25.3125 20.0134 20.0134 25.3125 13.5 25.3125Z"
														fill="#8B8B8B" />
													<path
														d="M20.5093 16.832L14.344 13.0293V3.62988C14.344 3.16396 13.9662 2.78613 13.5002 2.78613C13.0343 2.78613 12.6565 3.16396 12.6565 3.62988V13.9711L19.6233 18.2683C19.7614 18.3533 19.9144 18.394 20.0655 18.394C20.3485 18.394 20.6249 18.2516 20.7843 17.993C21.029 17.5965 20.9058 17.0767 20.5093 16.832Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a3.jpg" alt="PriyaSinghLegal" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">BrexitWasBad</div>
										</div>
										<div @mouseenter="showAnalysis($event, '14')" @mouseleave="hideAnalysis" class="post-text aly-text" style="margin-top: 15px">Handing out citizenships like
											Tesco Clubcards 🪪</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="31" height="26" viewBox="0 0 31 26" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M30.1511 16C29.667 16 29.2882 16.3838 29.2882 16.8705V21.0171C29.2882 22.812 27.8375 24.2574 26.076 24.2574H4.938C3.15868 24.2574 1.72586 22.812 1.72586 21.0171V16.8705C1.72586 16.3821 1.34538 16 0.862928 16C0.378826 16 0 16.3838 0 16.8705V21.0171C0 23.769 2.20996 26 4.93966 26H26.0598C28.7879 26 30.9995 23.7707 30.9995 21.0171V16.8705C31.0157 16.3838 30.6352 16 30.1511 16Z"
														fill="#8B8B8B" />
													<path
														d="M15.5081 19C15.9484 19 16.2929 18.6135 16.2929 18.1234V3.08683L19.6546 7.06881C19.8121 7.2448 20.0153 7.35007 20.22 7.35007C20.4085 7.35007 20.6131 7.27934 20.7545 7.105C21.0681 6.77111 21.0843 6.21024 20.7854 5.85992L16.0735 0.262752C15.7746 -0.0875839 15.2254 -0.0875839 14.9265 0.262752L10.2146 5.85992C9.91567 6.21025 9.93187 6.77278 10.2455 7.105C10.5591 7.43888 11.0627 7.42079 11.3601 7.07046L14.7218 3.08848V18.1233C14.7233 18.6135 15.0678 19 15.5081 19Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a4.jpg" alt="TomWDevon" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">MaryOConnorNI</div>
										</div>
										<div @mouseenter="showAnalysis($event, '15')" @mouseleave="hideAnalysis" class="post-text aly-text" style="margin-top: 15px">I was born here. My husband’s
											Irish. We’ve paid taxes 20+ years. This isn’t a “gift,” it’s overdue
											recognition. #GoodFridayAgreement</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="31" height="26" viewBox="0 0 31 26" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M30.1511 16C29.667 16 29.2882 16.3838 29.2882 16.8705V21.0171C29.2882 22.812 27.8375 24.2574 26.076 24.2574H4.938C3.15868 24.2574 1.72586 22.812 1.72586 21.0171V16.8705C1.72586 16.3821 1.34538 16 0.862928 16C0.378826 16 0 16.3838 0 16.8705V21.0171C0 23.769 2.20996 26 4.93966 26H26.0598C28.7879 26 30.9995 23.7707 30.9995 21.0171V16.8705C31.0157 16.3838 30.6352 16 30.1511 16Z"
														fill="#8B8B8B" />
													<path
														d="M15.5081 19C15.9484 19 16.2929 18.6135 16.2929 18.1234V3.08683L19.6546 7.06881C19.8121 7.2448 20.0153 7.35007 20.22 7.35007C20.4085 7.35007 20.6131 7.27934 20.7545 7.105C21.0681 6.77111 21.0843 6.21024 20.7854 5.85992L16.0735 0.262752C15.7746 -0.0875839 15.2254 -0.0875839 14.9265 0.262752L10.2146 5.85992C9.91567 6.21025 9.93187 6.77278 10.2455 7.105C10.5591 7.43888 11.0627 7.42079 11.3601 7.07046L14.7218 3.08848V18.1233C14.7233 18.6135 15.0678 19 15.5081 19Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>

								<div class="social-post">
									<div class="post-avatar">
										<img src="@/assets/news/Pub/a2.jpg" alt="ConnorJLeaks" />
									</div>
									<div class="post-content">
										<div class="post-header">
											<div class="post-author">AoifeInLondon</div>
										</div>
										<div @mouseenter="showAnalysis($event, '16')" @mouseleave="hideAnalysis" class="post-text aly-text" style="margin-top: 15px">Finally! A route that actually
											reflects how many of us live here already. Took them long enough.
											#Citizenship #IrishInUK</div>
										<div class="post-actions" style="margin-top: 15px">
											<button class="action-btn comment-btn" @click="handleComment('JamesEllis')">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd"
														d="M14.0004 0C21.7324 0 28 6.26664 28 13.9948C28 25.2005 15.4946 31.773 6.27774 25.6667L1.22787 27.9126C0.500359 28.2353 -0.240214 27.4855 0.0790456 26.7641L2.32449 21.7148C-1.34389 16.1813 -0.610515 8.81038 4.10117 4.09909C6.63501 1.56731 10.1348 0 14.0004 0ZM8.22769 12.0279H19.773C20.9254 12.0279 20.9254 10.278 19.773 10.278H8.22769C7.07528 10.278 7.07528 12.0279 8.22769 12.0279ZM8.22769 17.7132H15.1813C16.3337 17.7132 16.3337 15.9633 15.1813 15.9633H8.22769C7.07528 15.9633 7.07528 17.7132 8.22769 17.7132ZM22.663 5.33665C17.879 0.554288 10.122 0.554288 5.33801 5.33665C1.09753 9.57566 0.553984 16.2587 4.03014 21.1158L4.02895 21.117C4.20104 21.359 4.24495 21.6829 4.11559 21.9736L2.59054 25.4022L5.96694 23.9026C6.24941 23.7543 6.60188 23.7674 6.87842 23.9643C14.9286 29.704 26.2509 23.9869 26.2509 13.9975C26.2509 10.6137 24.8801 7.55289 22.663 5.33665Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn repost-btn" @click="handleRepost('JamesEllis')">
												<svg width="27" height="25" viewBox="0 0 27 25" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M8.21811 0C6.11616 0 4.01216 0.821998 2.40705 2.44161C-0.802351 5.67968 -0.802351 10.925 2.40705 14.162L2.46928 14.2247L12.8778 24.726H12.8788C12.8862 24.7366 12.8936 24.7462 12.902 24.7557C13.0064 24.8588 13.1362 24.9331 13.2775 24.9703C13.3302 24.983 13.384 24.9894 13.4388 24.9915C13.4589 24.9947 13.4779 24.9979 13.4979 25L13.5232 24.9968C13.7363 24.9915 13.9388 24.9055 14.0917 24.7557C14.1117 24.7366 14.1297 24.7154 14.1476 24.6931L24.5318 14.2247L24.5929 14.162C27.8024 10.9239 27.8024 5.67748 24.5929 2.43941C22.9878 0.820885 20.8859 0.0137315 18.7819 0.0137315C16.9036 0.0137315 15.022 0.658383 13.4981 1.94875C11.9752 0.656262 10.0949 -7.98454e-05 8.21842 0.000980481L8.21811 0ZM18.7783 1.69394C20.4447 1.69394 22.1133 2.34071 23.3976 3.63744C25.9668 6.22986 25.9668 10.3719 23.3976 12.9642L23.3354 13.0269L13.4966 22.9526L3.66509 13.0269L3.60287 12.9653C1.03372 10.3729 1.03372 6.23086 3.60287 3.6385C4.88744 2.34178 6.54849 1.7003 8.2192 1.7003C9.88873 1.7003 11.555 2.34284 12.8396 3.6385L12.8385 3.63956C12.8406 3.64275 12.8438 3.647 12.8459 3.65124L12.8892 3.68948H12.8881C12.8923 3.69479 12.8976 3.70116 12.9018 3.70753C13.1191 3.92419 13.4365 4.00597 13.7308 3.91994C13.7993 3.89976 13.8647 3.87002 13.9269 3.83391C13.928 3.83285 13.9301 3.83179 13.9322 3.83179C13.9923 3.79568 14.0482 3.75107 14.0978 3.70116L14.16 3.6385C15.4446 2.34283 17.111 1.695 18.7774 1.695L18.7783 1.69394Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn like-btn" @click="handleLike('JamesEllis')">
												<svg width="29" height="27" viewBox="0 0 29 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M14.6608 0.00278694C12.2656 0.00278694 10.3108 1.96211 10.3108 4.36289C10.3108 4.41875 10.3135 4.47461 10.3162 4.53048C5.86698 6.25408 2.89957 10.5568 2.89957 15.3735C2.89957 15.5629 2.905 15.7537 2.91452 15.9444C1.22072 16.5412 0 18.1613 0 20.0579C0 22.4587 1.9548 24.4166 4.35003 24.4166C5.14528 24.4166 5.89157 24.2 6.53319 23.8239C8.68102 25.8582 11.5302 27 14.4993 27C17.4685 27 20.3189 25.8596 22.4668 23.8239C23.1098 24.2 23.8548 24.4153 24.65 24.4153C27.0452 24.4153 29 22.4573 29 20.0566C29 18.1599 27.7793 16.5399 26.0855 15.9431C26.095 15.7537 26.0991 15.5629 26.0991 15.3722C26.0991 10.6797 23.2824 6.46396 18.9991 4.65713C19.0059 4.55903 19.01 4.46093 19.01 4.3601C19.01 1.95933 17.0552 0 14.66 0L14.6608 0.00278694ZM14.6608 1.29446C16.3586 1.29446 17.7221 2.66109 17.7221 4.36289C17.7221 6.06469 16.3586 7.43132 14.6608 7.43132C12.9629 7.43132 11.5994 6.06469 11.5994 4.36289C11.5994 2.66109 12.9629 1.29446 14.6608 1.29446ZM10.5648 5.82338C11.167 7.50882 12.7779 8.72285 14.6618 8.72285C16.5011 8.72285 18.0793 7.56742 18.7143 5.94327C22.4049 7.59739 24.8124 11.2776 24.8124 15.3733C24.8124 15.4823 24.8083 15.5913 24.8042 15.7017C24.7525 15.7017 24.7022 15.6949 24.6506 15.6949C22.2554 15.6949 20.3006 17.6542 20.3006 20.055C20.3006 21.1899 20.7369 22.2255 21.4506 23.0021C19.557 24.7353 17.08 25.7054 14.5 25.7054C11.9199 25.7054 9.44313 24.7353 7.5493 23.0021C8.26299 22.2254 8.69935 21.1899 8.69935 20.055C8.69935 17.6542 6.74455 15.6949 4.34932 15.6949C4.29766 15.6949 4.24736 15.6949 4.19707 15.7017C4.19435 15.5927 4.18891 15.4837 4.18891 15.3733C4.18891 11.166 6.72689 7.4107 10.5643 5.82328L10.5648 5.82338ZM4.34982 16.9894C6.04769 16.9894 7.41116 18.3561 7.41116 20.0579C7.41116 21.7597 6.04769 23.1249 4.34982 23.1249C2.65195 23.1249 1.28848 21.7597 1.28848 20.0579C1.28848 18.3561 2.65195 16.9894 4.34982 16.9894ZM24.6495 16.9894C26.3474 16.9894 27.7108 18.3561 27.7108 20.0579C27.7108 21.7597 26.3474 23.1249 24.6495 23.1249C22.9516 23.1249 21.5882 21.7597 21.5882 20.0579C21.5882 18.3561 22.9516 16.9894 24.6495 16.9894Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="31" height="26" viewBox="0 0 31 26" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M30.1511 16C29.667 16 29.2882 16.3838 29.2882 16.8705V21.0171C29.2882 22.812 27.8375 24.2574 26.076 24.2574H4.938C3.15868 24.2574 1.72586 22.812 1.72586 21.0171V16.8705C1.72586 16.3821 1.34538 16 0.862928 16C0.378826 16 0 16.3838 0 16.8705V21.0171C0 23.769 2.20996 26 4.93966 26H26.0598C28.7879 26 30.9995 23.7707 30.9995 21.0171V16.8705C31.0157 16.3838 30.6352 16 30.1511 16Z"
														fill="#8B8B8B" />
													<path
														d="M15.5081 19C15.9484 19 16.2929 18.6135 16.2929 18.1234V3.08683L19.6546 7.06881C19.8121 7.2448 20.0153 7.35007 20.22 7.35007C20.4085 7.35007 20.6131 7.27934 20.7545 7.105C21.0681 6.77111 21.0843 6.21024 20.7854 5.85992L16.0735 0.262752C15.7746 -0.0875839 15.2254 -0.0875839 14.9265 0.262752L10.2146 5.85992C9.91567 6.21025 9.93187 6.77278 10.2455 7.105C10.5591 7.43888 11.0627 7.42079 11.3601 7.07046L14.7218 3.08848V18.1233C14.7233 18.6135 15.0678 19 15.5081 19Z"
														fill="#8B8B8B" />
												</svg>
											</button>
											<button class="action-btn share-btn" @click="handleShare('JamesEllis')">
												<svg width="27" height="27" viewBox="0 0 27 27" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.30435 24.0615C2.62427 25.763 4.11314 27.0005 5.8411 27.0005H21.1588C22.892 27.0005 24.3756 25.763 24.6955 24.0615L26.9279 12.1629C26.9736 11.9063 27 11.6462 27 11.3895C27 9.07619 25.1191 7.19531 22.8058 7.19531H4.19416C1.88088 7.19531 0 9.07619 0 11.3895C0 11.6461 0.0228516 11.9063 0.0720725 12.1629L2.30449 24.0565L2.30435 24.0615ZM4.194 9.00032H22.8057C24.124 9.00032 25.1998 10.0761 25.1998 11.3945C25.1998 11.5421 25.1858 11.6863 25.1594 11.8357L22.927 23.7342C22.7688 24.585 22.0217 25.202 21.1586 25.202H5.84095C4.97609 25.202 4.23079 24.585 4.07257 23.7342L1.84015 11.8357C1.81378 11.688 1.79972 11.5386 1.79972 11.3945C1.79972 10.0761 2.87563 9.00032 4.194 9.00032Z"
														fill="#8B8B8B" />
													<path
														d="M4.49986 0C4.00414 0 3.59985 0.404301 3.59985 0.900006C3.59985 1.39571 4.00415 1.80001 4.49986 1.80001H22.5C22.9957 1.80001 23.4 1.39571 23.4 0.900006C23.4 0.404301 22.9957 0 22.5 0H4.49986Z"
														fill="#8B8B8B" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Ideal Observer 内容 -->
			<!-- <div v-if="activeTab === 'ideal'" class="analysis-content">
				<div class="analysis-overview">
					<h3>Content Analysis Overview</h3>
					<div class="analysis-summary">
						<div class="summary-item">
							<span class="summary-label">Overall Neutrality:</span>
							<span class="summary-value">High</span>
						</div>
						<div class="summary-item">
							<span class="summary-label">Source Credibility:</span>
							<span class="summary-value verified">Verified</span>
						</div>
						<div class="summary-item">
							<span class="summary-label">Bias Detection:</span>
							<span class="summary-value">Minimal</span>
						</div>
						<div class="summary-item">
							<span class="summary-label">Fact Check Status:</span>
							<span class="summary-value">Verified</span>
						</div>
					</div>
					<p class="analysis-note">Switch to Human Observer mode and hover over highlighted text to see detailed analysis.</p>
				</div>

				<div class="detailed-analysis">
					<h3>Detailed Analysis</h3>
					<div class="analysis-details-panel">
						<div class="analysis-item">
							<span class="analysis-label">Title Neutrality Check:</span>
							<span class="analysis-value">No emotional or biased language detected.</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">Source Verified:</span>
							<span class="analysis-value verified">The Guardian</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">User Verification:</span>
							<span class="analysis-value">Unverified account</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">Emotion Score:</span>
							<span class="analysis-value">0.063</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">Result:</span>
							<span class="analysis-value result-text">No misinformation draft; both versions maintain identical semantic, emotional, and structural metrics. Fully factual rewrite.</span>
						</div>
					</div>
				</div>
			</div> -->
		</div>

		<!-- 右侧推荐区域 - 只在Human Observer模式下显示 -->
		<div v-if="activeTab === 'human'" class="sidebar-right">
			<!-- What's happening -->
			<div class="trending-section">
				<h3>What's happening</h3>
				<div class="trending-items">
					<div v-for="trend in trendingTopics" :key="trend.id" class="trending-item"
						@click="selectTrend(trend)">
						<div class="trending-image" v-if="trend.image">
							<img src="@/assets/right/d1facbaa8de0c18a05f824787ba3598d93fc0067.png" :alt="trend.title" />
						</div>
						<div class="trending-content">
							<div class="trending-category" v-if="trend.category">{{ trend.category }}</div>
							<div class="trending-title">{{ trend.title }}</div>
							<div class="trending-meta" v-html="formatTrendingMeta(trend.meta)"></div>
							<div class="trending-meta" v-if="trend.posts" v-html="formatTrendingMeta(trend.posts)">
							</div>
						</div>
						<button class="more-options" @click.stop="showTrendOptions(trend)">
							<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
								<circle cx="2" cy="2" r="1.5" fill="currentColor" />
								<circle cx="8" cy="2" r="1.5" fill="currentColor" />
								<circle cx="14" cy="2" r="1.5" fill="currentColor" />
							</svg>
						</button>
					</div>
				</div>
				<button class="show-more-btn">Show More</button>
			</div>

			<!-- Who to follow -->
			<div class="follow-section">
				<h3>Who to follow</h3>
				<div class="follow-suggestions">
					<div v-for="user in suggestedUsers" :key="user.id" class="follow-item">
						<div class="follow-avatar">
							<img :src="user.avatar" :alt="user.name" />
						</div>
						<div class="follow-info">
							<div class="follow-name">{{ user.name }}</div>
							<div class="follow-handle">{{ user.handle }}</div>
						</div>
						<button class="follow-button" @click="toggleFollow(user)"
							:class="{ following: user.isFollowing }">
							{{ user.isFollowing ? 'Following' : 'Follow' }}
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 浮动分析弹窗 -->
		<div v-if="showAnalysisTooltip" class="analysis-tooltip" :style="tooltipStyle">
			<div class="tooltip-content">
				<div class="analysis-details">
					<div class="analysis-item">
						<span class="analysis-label">Title Neutrality Check:</span>
						<span class="analysis-value">{{ currentAnalysis.neutrality }}</span>
					</div>
					<div v-if="currentAnalysis.source" class="analysis-item">
						<span class="analysis-label">Source Verified:</span>
						<span class="analysis-value verified">{{ currentAnalysis.source }}</span>
					</div>
					<div class="analysis-item">
						<span class="analysis-label">User Verification:</span>
						<span class="analysis-value">{{ currentAnalysis.userVerification }}</span>
					</div>
					<div class="analysis-item">
						<span class="analysis-label">Emotion Score:</span>
						<span class="analysis-value">{{ currentAnalysis.emotionScore }}</span>
					</div>
					<div class="analysis-item">
						<span class="analysis-label">Result:</span>
						<span class="analysis-value result-text">{{ currentAnalysis.result }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SidebarMenu from '@/components/SidebarMenu.vue'
	import avatar1 from '@/assets/figma/avatar/avatar1.jpg'
	import userAvatar1 from '@/assets/right/ff5df8a387941532dfba1a476259cb1f58b083c6.jpg'
	import userAvatar2 from '@/assets/right/e11d8650ead4662434056954faae2c4bbddba503.jpg'
	import userAvatar3 from '@/assets/right/1ce0ca3e3b6eb048fe749c4d1b8594eac7ba5b7b.jpg'
	import MasaigonBackground from '@/components/MasaigonBackground.vue'

	export default {
		name: 'News',
		components: {
			SidebarMenu,
			MasaigonBackground
		},
		data() {
			return {
				activeNavItem: 'news',
				userName: 'Polly',
				userEmail: 'pollyliu508@sina.com',
				userAvatar: avatar1,
				activeTab: 'human', // 默认显示Human Observer
				currentAnalysis: null,
				showAnalysisTooltip: false,
				tooltipX: 0,
				tooltipY: 0,
				trendingTopics: [{
						id: 1,
						title: 'Flamengo vs Bayern Munich',
						meta: '42 minutes ago',
						category: '',
						image: avatar1
					},
					{
						id: 2,
						title: 'The BBC',
						meta: '268K posts',
						category: 'Entertainment · Trending'
					},
					{
						id: 3,
						title: 'Glastonbury',
						meta: 'Trending with The Prodigy,Olivia Rodrigo',
						category: 'Entertainment · Trending',
						posts: '268K posts',
					},
					{
						id: 4,
						title: '#LoveIsland',
						meta: 'Trending with Shakira, Helena',
						category: 'Love Island UK· Trending',
						posts: '268K posts',
					},
					{
						id: 5,
						title: 'Rod Stewart',
						meta: 'Trending with Lulu, Mick Hucknall',
						category: 'Entertainment · Trending',
						posts: '268K posts',
					}
				],
				suggestedUsers: [{
						id: 1,
						name: 'Angela Rayner',
						handle: '@AngelaRayner',
						avatar: userAvatar1,
						isFollowing: false
					},
					{
						id: 2,
						name: 'Big Hims',
						handle: '@BigHims',
						avatar: userAvatar2,
						isFollowing: false
					},
					{
						id: 3,
						name: 'Franz von Holzhausen',
						handle: '@FranzVH',
						avatar: userAvatar3,
						isFollowing: false
					}
				]
			}
		},
		computed: {
			tooltipStyle() {
				return {
					left: `${this.tooltipX}px`,
					top: `${this.tooltipY}px`
				}
			}
		},
		methods: {
			handleNavClick(navName) {
				this.activeNavItem = navName
				console.log('Navigation clicked:', navName)
			},
			handlePostClick() {
				console.log('POST button clicked')
			},
			handleUserProfileClick() {
				console.log('User profile clicked')
			},
			showAnalysis(event, type) {
				// 只在Human Observer模式下显示分析
				if (this.activeTab !== 'ideal') return

				if (type == "1") {
					this.currentAnalysis = {
						neutrality: 'Neutral; uses objective language without emotional or biased phrasing',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.058',
						result: 'Faithful in tone and meaning, remains neutral and analytical, with slightly increased specificity and complexity in wording'
					}
				} else if (type == "2") {
					this.currentAnalysis = {
						neutrality: 'Neutral; presents the report’s position objectively without emotive or biased language.',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.013',
						result: 'Summary (third-party): Neutral and accurate reflection of the original argument, with moderate complexity and very limited emotional expression.'
					}
				} else if (type == "3") {
					this.currentAnalysis = {
						neutrality: 'Neutral tone, objective language, but introduces a change in subject specificity.',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.027',
						result: 'Generally neutral, but the added subject specificity introduces a slight semantic shift.'
					}
				} else if (type == "4") {
					this.currentAnalysis = {
						neutrality: 'Neutral in tone, but introduces mild interpretive framing (“sobering statistical landscape” ), which adds slight emotional color.',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.028',
						result: 'Generally faithful, but with slight semantic drift due to more dramatic wording'
					}
				} else if (type == "5") {
					this.currentAnalysis = {
						neutrality: 'Neutral; the wording is factual and avoids emotional or biased language.',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.042',
						result: 'Largely accurate. Semantic drift is minimal and does not distort the original meaning.'
					}
				} else if (type == "6") {
					this.currentAnalysis = {
						neutrality: 'Neutral',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.011',
						result: 'Faithful and neutral summary of the report’s argument, with a formal and accurate tone, no semantic distortion.'
					}
				} else if (type == "7") {
					this.currentAnalysis = {
						neutrality: 'Neutral',
						source: 'The Guardian',
						userVerification: 'Uverified account',
						emotionScore: '0.052',
						result: 'Faithfully reflects the report’s tone and content, slightly elevated emotional tone due to metaphorical phrasing, but remains neutral and accurate in context.'
					}
				} else if (type == "8") {
					this.currentAnalysis = {
						neutrality: 'Neutral; presents the report’s claim objectively',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.029',
						result: 'Accurate and neutral summary of the report’s argument, with clear focus and minimal emotional coloring—no semantic drift detected.'
					}
				} else if (type == "9") {
					this.currentAnalysis = {
						neutrality: 'Neutral',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.016',
						result: 'Accurate and neutral representation of the report’s conclusion, with clear emphasis on its policy recommendations and no semantic drift.'
					}
				} else if (type == "10") {
					this.currentAnalysis = {
						neutrality: 'Neutral',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.057',
						result: 'Largely accurate summary of core proposals, but slightly compressed—some nuance is lost, though no semantic distortion or emotional drift is present.'
					}
				} else if (type == "11") {
					this.currentAnalysis = {
						neutrality: 'Neutral',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.011',
						result: 'Accurate and faithful summary of the original recommendation;'
					}
				} else if (type == "12") {
					this.currentAnalysis = {
						neutrality: 'Neutral; uses careful language without exaggeration.',
						source: 'The CSJ report',
						userVerification: 'Uverified account',
						emotionScore: '0.016',
						result: 'Faithful and accurate summary of the report’s conclusion, retaining the cautionary tone and intent without semantic drift.'
					}
				} else if (type == "13") {
					this.currentAnalysis = {
						neutrality: 'Not neutral; expresses personal opinion and mild frustration (“Took them long enough”), reflecting a subjective stance.',
						source: 'Unverified Source',
						userVerification: 'Uverified account',
						emotionScore: '0.233',
						result: 'The comment reflects personal support for the policy with informal tone and mild criticism of its delay.'
					}
				} else if (type == "14") {
					this.currentAnalysis = {
						neutrality: 'Not neutral; uses sarcasm and metaphor to criticise the policy.',
						source: 'Unverified Source',
						userVerification: 'Uverified account',
						emotionScore: '0.136',
						result: 'Sarcastic and critical, implying the policy is overly lenient.'
					}
				} else if (type == "15") {
					this.currentAnalysis = {
						neutrality: 'Not neutral; expresses a personal stance and challenges the framing of the policy as a "gift."',
						source: 'Unverified Source',
						userVerification: 'Uverified account',
						emotionScore: '0.121',
						result: 'Personal and assertive; frames the policy as long-overdue justice rather than generosity, grounded in lived experience.'
					}
				} else if (type == "16") {
					this.currentAnalysis = {
						neutrality: 'Not neutral; expresses personal satisfaction and frustration, using informal language.',
						source: 'Unverified Source',
						userVerification: 'Uverified account',
						emotionScore: '0.163',
						result: 'Supportive but informal; conveys approval of the policy and criticism of its delay from a personal perspective.'
					}
				}



				// 计算弹窗位置 - 显示在文字右侧
				const rect = event.target.getBoundingClientRect()
				this.tooltipX = rect.right + 10
				this.tooltipY = rect.top
				if (type == "8") {
					this.tooltipY = rect.top - 200
				}
				this.showAnalysisTooltip = true
			},
			hideAnalysis() {
				this.showAnalysisTooltip = false
				this.currentAnalysis = null
			},
			selectTrend(trend) {
				console.log('Selected trend:', trend)
			},
			showTrendOptions(trend) {
				console.log('Show trend options for:', trend)
			},
			toggleFollow(user) {
				user.isFollowing = !user.isFollowing
			},
			formatTrendingMeta(meta) {
				if (meta.includes('Trending with')) {
					const [text, ...names] = meta.split('Trending with');
					return `${text}Trending with <span style="color: #2FB9C5;">${names.join(' ')}</span>`;
				}
				return meta;
			},
			// 社交媒体互动方法
			handleComment(postAuthor) {
				console.log('Comment on post by:', postAuthor);
				// 这里可以添加评论功能
			},
			handleRepost(postAuthor) {
				console.log('Repost from:', postAuthor);
				// 这里可以添加转发功能
			},
			handleLike(postAuthor) {
				console.log('Like post by:', postAuthor);
				// 这里可以添加点赞功能
			},
			handleShare(postAuthor) {
				console.log('Share post by:', postAuthor);
				// 这里可以添加分享功能
			}
		}
	}
</script>

<style scoped lang="scss">
	// /* 全局样式重置 */
	// :global(body) {
	// 	background: #000 !important;
	// 	margin: 0;
	// 	padding: 0;
	// 	overflow-x: hidden;
	// }

	// :global(html) {
	// 	background: #000 !important;
	// }

	.global-white-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		z-index: -2;
		pointer-events: none;
	}

	.news-page {
		display: flex;
		min-height: 100vh;
		// background: #000;
		color: #FFFFFF;
		font-family: 'BioRhyme', serif;
		position: relative;
		overflow: hidden;

		// 白色主题样式
		&.light-theme {
			background: #FFFFFF;
			color: #000000;

			.main-content {
				background: rgba(255, 255, 255, 0.95);
				border: 0.25px solid #000000;

				.tab-header {
					border-bottom: 1px solid #000000;

					.tab-buttons {
						.tab-button {
							background: rgba(255, 255, 255, 0.95);
							border: 1px solid #000000;
							color: #000000;

							&:hover {
								background: rgba(0, 0, 0, 0.05);
							}

							&.active {
								background: rgba(0, 0, 0, 0.1);
								color: #000000;
								text-decoration: underline;
								text-decoration-color: #000000;
								text-decoration-thickness: 2px;
								text-underline-offset: 3px;
							}
						}
					}
				}

				.news-content {
					.news-post {
						.news-avatar {
							border: 1px solid rgba(0, 0, 0, 0.2);
						}

						.news-main-content {
							.news-header {
								.news-author-info {
									.author-name {
										color: #000000;
									}

									.author-handle {
										color: rgba(0, 0, 0, 0.65);
									}

									.publish-time {
										color: rgba(0, 0, 0, 0.5);
									}
								}

								.news-title {
									color: #000000;
								}

								.news-meta {
									color: rgba(0, 0, 0, 0.7);

									.news-summary {
										color: rgba(0, 0, 0, 0.9);
									}

									.news-date {
										color: #2FB9C5; // 保持原色
									}

									.news-author {
										color: #000000;
									}

									.news-category {
										color: #2FB9C5; // 保持原色
									}
								}
							}

							.news-main-image {
								img {
									border: 0.5px solid rgba(0, 0, 0, 0.2);
								}

								.image-caption {
									color: rgba(0, 0, 0, 0.5);
								}
							}

							.news-body {
								p {
									color: rgba(0, 0, 0, 0.95);
								}

								.highlighted-text {
									color: #2FB9C5; // 保持原色
								}

								.analyzable-text {
									&:hover {
										background: rgba(47, 185, 197, 0.1);
									}
								}

								.section-title {
									color: #000000;
								}

								.quote-block {
									background: rgba(0, 0, 0, 0.05);
									border: 0.5px solid rgba(0, 0, 0, 0.1);
									color: rgba(0, 0, 0, 0.9);

									blockquote {
										color: rgba(0, 0, 0, 0.9);
									}

									cite {
										color: rgba(0, 0, 0, 0.7);
									}
								}

								.news-inline-image {
									img {
										border: 0.5px solid rgba(0, 0, 0, 0.2);
									}

									.inline-caption {
										color: rgba(0, 0, 0, 0.5);
									}
								}

								.news-list {
									li {
										color: rgba(0, 0, 0, 0.95);
									}

									.story-item {
										font-size: 15px;
										color: rgba(0, 0, 0, 0.95);
										line-height: 1.6;
										margin-bottom: 16px;
										font-family: 'BioRhyme', serif;
										letter-spacing: 0.2px;
										padding-left: 0;

										strong {
											// color: #2FB9C5;
											font-weight: 600;
										}
									}
								}

								.social-media-posts {
									margin-left: -52px; // 抵消news-main-content的偏移，让头像对齐

									.social-post {
										background: transparent;
										border: none;
										border-bottom: 1px solid rgba(0, 0, 0, 0.08);
										padding: 16px 20px;
										margin-bottom: 1px;

										&:hover {
											background: rgba(0, 0, 0, 0.03);
										}

										.post-avatar {
											border: none;
										}

										.post-content {
											min-width: 0; // 防止内容溢出

											.post-header {
												gap: 4px;
												margin-bottom: 4px;
												font-size: 15px;

												.post-author {
													color: #000000;
												}

												.post-handle {
													color: rgba(0, 0, 0, 0.6);
												}

												.post-time {
													color: rgba(0, 0, 0, 0.6);

													&:before {
														margin: 0 4px;
													}
												}
											}

											.post-text {
												font-size: 15px;
												color: rgba(0, 0, 0, 0.95);
												line-height: 1.3;
												margin-bottom: 12px;
											}

											.post-actions {
												justify-content: space-between;
												max-width: 425px;
												margin-top: 12px;

												.action-btn {
													color: rgba(0, 0, 0, 0.6);
													padding: 8px;
													border-radius: 50%;
													font-size: 13px;
													font-weight: 400;
													min-width: 20px;
													height: 20px;
													gap: 8px;

													&:hover {
														background: rgba(0, 0, 0, 0.1);
														color: rgba(0, 0, 0, 0.8);
													}

													svg {
														width: 18px;
														height: 18px;
														stroke-width: 2;
													}

													span {
														font-size: 13px;
														font-weight: 400;
														color: rgba(0, 0, 0, 0.6);
													}

													&.comment-btn {
														&:hover {
															background: rgba(29, 155, 240, 0.1);
															color: #1d9bf0;

															svg {
																color: #1d9bf0;
															}

															span {
																color: #1d9bf0;
															}
														}
													}

													&.repost-btn {
														&:hover {
															background: rgba(0, 186, 124, 0.1);
															color: #00ba7c;

															svg {
																color: #00ba7c;
															}

															span {
																color: #00ba7c;
															}
														}
													}

													&.like-btn {
														&:hover {
															background: rgba(249, 24, 128, 0.1);
															color: #f91880;

															svg {
																color: #f91880;
															}

															span {
																color: #f91880;
															}
														}
													}

													&.share-btn {
														&:hover {
															background: rgba(0, 0, 0, 0.1);
															color: rgba(0, 0, 0, 0.8);

															svg {
																color: rgba(0, 0, 0, 0.8);
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}

					.news-header {
						.news-title {
							color: #000000;
						}

						.news-meta {
							color: rgba(0, 0, 0, 0.7);

							.news-summary {
								color: #000000;
							}

							.news-date {
								color: #2FB9C5; // 保持原色
							}

							.news-author {
								color: #000000;
							}

							.news-category {
								color: #2FB9C5; // 保持原色
							}
						}
					}

					.news-main-image {
						margin-bottom: 24px;

						img {
							width: 100%;
							height: auto;
							// height: 300px;
							object-fit: cover;
							border-radius: 10px;
							margin-bottom: 8px;
							border: 0.5px solid rgba(255, 255, 255, 0.2);
						}

						.image-caption {
							font-size: 12px;
							color: rgba(255, 255, 255, 0.5);
							font-style: italic;
							line-height: 1.4;
							font-family: 'BioRhyme', serif;
						}
					}

					.news-body {
						margin-bottom: 30px;

						p {
							font-size: 16px;
							color: rgba(255, 255, 255, 0.95);
							line-height: 1.6;
							margin-bottom: 16px;
							font-family: 'BioRhyme', serif;
							letter-spacing: 0.2px;
						}

						.highlighted-text {
							color: #2FB9C5;
							font-weight: 500;
						}

						.analyzable-text {
							cursor: pointer;
							position: relative;
							transition: all 0.2s ease;

							&:hover {
								background: rgba(47, 185, 197, 0.1);
								padding: 2px 4px;
								border-radius: 4px;
							}
						}

						.section-title {
							font-size: 20px;
							font-weight: 700;
							color: #FFFFFF;
							margin: 24px 0 16px 0;
							font-family: 'BioRhyme', serif;
							letter-spacing: 0.3px;
						}

						.quote-block {
							margin: 24px 0;
							padding: 20px;
							background: rgba(255, 255, 255, 0.05);
							border-radius: 10px;
							border: 0.5px solid rgba(255, 255, 255, 0.1);
							font-style: italic;
							color: rgba(255, 255, 255, 0.9);
							font-size: 15px;
							line-height: 1.6;
							font-family: 'BioRhyme', serif;
							letter-spacing: 0.2px;

							blockquote {
								margin: 0 0 10px 0;
								padding: 0;
								font-style: italic;
								color: rgba(255, 255, 255, 0.9);
								font-size: 15px;
								line-height: 1.6;
								font-family: 'BioRhyme', serif;
								letter-spacing: 0.2px;
							}

							cite {
								display: block;
								text-align: right;
								font-size: 14px;
								color: rgba(255, 255, 255, 0.7);
								font-family: 'BioRhyme', serif;
								letter-spacing: 0.2px;
							}
						}

						.news-inline-image {
							margin: 24px 0;
							display: flex;
							align-items: center;
							gap: 12px;
							flex-wrap: wrap;

							img {
								// width: 100px;
								// height: 100px;
								border-radius: 8px;
								object-fit: cover;
								border: 0.5px solid rgba(255, 255, 255, 0.2);
							}

							.inline-caption {
								font-size: 12px;
								color: rgba(255, 255, 255, 0.5);
								font-style: italic;
								line-height: 1.4;
								font-family: 'BioRhyme', serif;
							}
						}

						.news-list {
							padding-left: 0;
							margin-bottom: 24px;

							li {
								font-size: 15px;
								color: rgba(255, 255, 255, 0.95);
								line-height: 1.6;
								margin-bottom: 8px;
								font-family: 'BioRhyme', serif;
								letter-spacing: 0.2px;
							}

							.story-item {
								font-size: 15px;
								color: rgba(255, 255, 255, 0.95);
								line-height: 1.6;
								margin-bottom: 16px;
								font-family: 'BioRhyme', serif;
								letter-spacing: 0.2px;
								padding-left: 0;

								strong {
									// color: #2FB9C5;
									font-weight: 600;
								}
							}
						}
					}
				}

				.analysis-content {
					.analysis-overview {
						h3 {
							color: #000000;
						}

						.analysis-summary {
							background: rgba(0, 0, 0, 0.05);
							border: 0.5px solid rgba(0, 0, 0, 0.1);

							.summary-item {
								.summary-label {
									color: #000000;
								}

								.summary-value {
									color: rgba(0, 0, 0, 0.7);

									&.verified {
										color: #2FB9C5; // 保持原色
									}
								}
							}
						}

						.analysis-note {
							color: rgba(0, 0, 0, 0.6);
						}
					}

					.detailed-analysis {
						h3 {
							color: #000000;
						}

						.analysis-details-panel {
							background: rgba(0, 0, 0, 0.05);
							border: 0.5px solid rgba(0, 0, 0, 0.1);

							.analysis-item {
								.analysis-label {
									color: #000000;
								}

								.analysis-value {
									color: rgba(0, 0, 0, 0.8);

									&.verified {
										color: #2FB9C5; // 保持原色
									}

									&.result-text {
										color: rgba(0, 0, 0, 0.9);
									}
								}
							}
						}
					}
				}
			}

			.sidebar-right {

				.trending-section,
				.follow-section {
					background: rgba(255, 255, 255, 0.95);
					border: 0.25px solid #000000;

					h3 {
						color: #000000;
					}
				}

				.trending-items {
					.trending-item {
						border-bottom: 1px solid rgba(0, 0, 0, 0.08);

						&:hover {
							background: rgba(0, 0, 0, 0.05);
						}

						.trending-image {
							border: 1px solid rgba(0, 0, 0, 0.1);
						}

						.trending-content {
							.trending-category {
								color: rgba(0, 0, 0, 0.5);
							}

							.trending-title {
								color: #000000;
							}

							.trending-meta {
								color: rgba(0, 0, 0, 0.5);

								:deep(span) {
									color: #2FB9C5; // 保持原色
								}
							}
						}

						.more-options {
							color: rgba(0, 0, 0, 0.5);

							&:hover {
								background: rgba(0, 0, 0, 0.1);
								color: rgba(0, 0, 0, 0.8);
							}
						}
					}
				}

				.show-more-btn {
					color: #2FB9C5; // 保持原色
					border-top: 1px solid rgba(0, 0, 0, 0.08);

					&:hover {
						background: rgba(0, 0, 0, 0.05);
					}
				}

				.follow-suggestions {
					.follow-item {
						.follow-avatar {
							border: 0.5px solid rgba(0, 0, 0, 0.2);
						}

						.follow-info {
							.follow-name {
								color: #000000;
							}

							.follow-handle {
								color: rgba(0, 0, 0, 0.65);
							}
						}

						.follow-button {
							background: #FFFFFF;
							border: 1px solid #000000;
							color: #000000;

							&:hover {
								background: #f0f0f0;
							}

							&.following {
								background: rgba(0, 0, 0, 0.1);
								border: 1px solid rgba(0, 0, 0, 0.3);
								color: #000000;

								&:hover {
									background: rgba(244, 33, 46, 0.2);
									border-color: #f4212e;
									color: #f4212e; // 保持原色
								}
							}
						}
					}
				}
			}

			// 浮动分析弹窗白色主题
			.analysis-tooltip {
				background: rgba(255, 255, 255, 0.95);
				border: 1px solid rgba(0, 0, 0, 0.3);

				.tooltip-content {
					.analysis-details {
						.analysis-item {
							.analysis-label {
								color: #000000;
							}

							.analysis-value {
								color: rgba(0, 0, 0, 0.8);

								&.verified {
									color: #2FB9C5;
									font-weight: 600;
								}

								&.result-text {
									color: rgba(255, 255, 255, 0.9);
									line-height: 1.5;
									font-size: 10px;
								}
							}
						}
					}
				}
			}
		}
	}

	/* 主内容区域 */
	.main-content {
		flex: 1;
		margin-left: 27%;
		margin-right: 27%;
		width: 48%;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(15.7px);
		border: 0.25px solid #FFFFFF;
		border-radius: 15px;
		min-height: 100vh;
		position: relative;
		border-right: 1.7px solid #ccc;
		border-left: 1.7px solid #ccc;
	}

	.tab-header {
		display: flex;
		height: 49px;
		border-bottom: 1px solid #FFFFFF;
		position: sticky;
		top: 0;
		z-index: 10;

		.tab-buttons {
			display: flex;
			width: 100%;
			height: 100%;

			.tab-button {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				background: rgba(255, 255, 255, 0.1);
				border: 1px solid #FFFFFF;
				backdrop-filter: blur(15.7px);
				color: #FFFFFF;
				font-family: 'BioRhyme', serif;
				font-weight: 600;
				font-size: 18px;
				line-height: 1.549;
				cursor: pointer;
				transition: all 0.2s ease;
				position: relative;

				&:first-child {
					border-top-left-radius: 15px;
				}

				&:last-child {
					border-top-right-radius: 15px;
				}

				&.active {
					background: rgba(255, 255, 255, 0.15);
					text-decoration: underline;
					text-decoration-color: #FFFFFF;
					text-decoration-thickness: 2px;
					text-underline-offset: 3px;
				}

				&:hover {
					background: rgba(255, 255, 255, 0.2);
				}
			}
		}
	}

	.related-news {
		h3 {
			font-size: 20px;
			font-weight: 700;
			color: #FFFFFF;
			margin-bottom: 16px;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.3px;
		}

		.related-articles {
			display: flex;
			gap: 16px;
			overflow-x: auto;
			padding-bottom: 10px;
			margin-bottom: 24px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);

			.related-item {
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				gap: 12px;
				cursor: pointer;
				transition: all 0.2s ease;

				&:hover {
					transform: translateY(-2px);
				}

				img {
					width: 60px;
					height: 60px;
					border-radius: 8px;
					object-fit: cover;
					border: 0.5px solid rgba(255, 255, 255, 0.2);
				}

				.related-content {
					h4 {
						font-size: 15px;
						font-weight: 700;
						color: #FFFFFF;
						margin-bottom: 4px;
						font-family: 'BioRhyme', serif;
						line-height: 1.3;
						letter-spacing: -0.2px;
					}

					p {
						font-size: 13px;
						color: rgba(255, 255, 255, 0.7);
						line-height: 1.4;
						font-family: 'BioRhyme', serif;
						letter-spacing: 0.2px;
					}
				}
			}
		}
	}

	/* 分析内容样式 */
	.analysis-content {
		padding: 30px 28px;
	}

	.analysis-overview {
		margin-bottom: 30px;

		h3 {
			font-size: 20px;
			font-weight: 700;
			color: #FFFFFF;
			margin-bottom: 20px;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.3px;
		}

		.analysis-summary {
			background: rgba(255, 255, 255, 0.05);
			border-radius: 10px;
			padding: 20px;
			margin-bottom: 20px;
			border: 0.5px solid rgba(255, 255, 255, 0.1);

			.summary-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 14px;

				&:last-child {
					margin-bottom: 0;
				}

				.summary-label {
					font-size: 15px;
					font-weight: 600;
					color: #FFFFFF;
					font-family: 'BioRhyme', serif;
				}

				.summary-value {
					font-size: 15px;
					color: rgba(255, 255, 255, 0.7);
					font-family: 'BioRhyme', serif;

					&.verified {
						color: #2FB9C5;
						font-weight: 600;
					}
				}
			}
		}

		.analysis-note {
			font-size: 14px;
			color: rgba(255, 255, 255, 0.6);
			text-align: center;
			font-style: italic;
			margin: 0;
			line-height: 1.4;
			font-family: 'BioRhyme', serif;
		}
	}

	.detailed-analysis {
		h3 {
			font-size: 20px;
			font-weight: 700;
			color: #FFFFFF;
			margin-bottom: 20px;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.3px;
		}

		.analysis-details-panel {
			background: rgba(255, 255, 255, 0.05);
			border-radius: 10px;
			padding: 20px;
			border: 0.5px solid rgba(255, 255, 255, 0.1);

			.analysis-item {
				margin-bottom: 16px;

				&:last-child {
					margin-bottom: 0;
				}

				.analysis-label {
					display: block;
					font-size: 13px;
					font-weight: 600;
					color: #FFFFFF;
					margin-bottom: 4px;
					font-family: 'BioRhyme', serif;
				}

				.analysis-value {
					display: block;
					font-size: 12px;
					color: rgba(255, 255, 255, 0.8);
					line-height: 1.4;
					font-family: 'BioRhyme', serif;

					&.verified {
						color: #2FB9C5;
						font-weight: 600;
					}

					&.result-text {
						color: rgba(255, 255, 255, 0.9);
						line-height: 1.5;
						font-size: 11px;
					}
				}
			}
		}
	}

	/* 右侧边栏 - 复制自SocialFeed.vue */
	.sidebar-right {
		width: 26%;
		padding: 20px 20px 48px 0;
		position: fixed;
		right: 0;
		top: 0;
		height: 100vh;
		overflow-y: auto;
		background: transparent;
	}

	.trending-section,
	.follow-section {
		background: rgba(255, 255, 255, 0.1);
		border: 0.25px solid #FFFFFF;
		border-radius: 15px;
		margin-bottom: 24px;
		overflow: hidden;
		backdrop-filter: blur(15.7px);

		h3 {
			font-size: 20px;
			font-weight: 700;
			padding: 20px 28px;
			margin: 0;
			color: #FFFFFF;
			font-family: 'BioRhyme', serif;
			letter-spacing: -0.3px;
		}
	}

	.trending-items {
		.trending-item {
			display: flex;
			align-items: flex-start;
			padding: 20px 28px;
			cursor: pointer;
			transition: all 0.2s ease;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);

			&:last-child {
				border-bottom: none;
			}

			&:hover {
				background: rgba(255, 255, 255, 0.05);
			}

			.trending-image {
				width: 49px;
				height: 49px;
				border-radius: 8px;
				overflow: hidden;
				margin-right: 12px;
				flex-shrink: 0;
				border: 1px solid rgba(255, 255, 255, 0.1);

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.trending-content {
				flex: 1;
				min-width: 0;

				.trending-category {
					color: rgba(255, 255, 255, 0.5);
					font-size: 13px;
					font-weight: 400;
					margin-bottom: 2px;
					font-family: 'BioRhyme', serif;
					line-height: 1.3;
				}

				.trending-title {
					font-weight: 700;
					font-size: 15px;
					color: #FFFFFF;
					margin-bottom: 2px;
					font-family: 'BioRhyme', serif;
					line-height: 1.3;
					letter-spacing: -0.2px;
				}

				.trending-meta {
					color: rgba(255, 255, 255, 0.5);
					font-size: 13px;
					margin-bottom: 0;
					font-weight: 400;
					font-family: 'BioRhyme', serif;
					line-height: 1.3;

					:deep(span) {
						color: #2FB9C5;
					}
				}
			}

			.more-options {
				background: none;
				border: none;
				color: rgba(255, 255, 255, 0.5);
				cursor: pointer;
				padding: 4px;
				border-radius: 50%;
				transition: all 0.2s ease;
				margin-top: 2px;
				flex-shrink: 0;

				&:hover {
					background: rgba(255, 255, 255, 0.1);
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}
	}

	.show-more-btn {
		width: 100%;
		background: none;
		border: none;
		color: #2FB9C5;
		padding: 20px 28px;
		cursor: pointer;
		font-size: 15px;
		font-weight: 400;
		transition: all 0.2s ease;
		font-family: 'BioRhyme', serif;
		text-align: left;
		border-top: 1px solid rgba(255, 255, 255, 0.08);

		&:hover {
			background: rgba(255, 255, 255, 0.05);
		}
	}

	.follow-suggestions {
		.follow-item {
			display: flex;
			align-items: center;
			padding: 18px 24px;

			.follow-avatar {
				width: 44px;
				height: 44px;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 14px;
				border: 0.5px solid rgba(255, 255, 255, 0.2);

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.follow-info {
				flex: 1;

				.follow-name {
					font-weight: 700;
					font-size: 16px;
					color: #FFFFFF;
					margin-bottom: 3px;
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.3px;
				}

				.follow-handle {
					color: rgba(255, 255, 255, 0.65);
					font-size: 14px;
					font-weight: 400;
					font-family: 'BioRhyme', serif;
				}
			}

			.follow-button {
				width: 89px;
				height: 35px;
				background: #000;
				border: none;
				border-radius: 20px;
				color: #FFFFFF;
				font-family: 'BioRhyme', serif;
				font-weight: 600;
				font-size: 14px;
				cursor: pointer;
				transition: all 0.2s ease;

				&:hover {
					background: #333;
					transform: translateY(-2px);
				}

				&.following {
					background: rgba(255, 255, 255, 0.1);
					border: 1px solid rgba(255, 255, 255, 0.3);

					&:hover {
						background: rgba(244, 33, 46, 0.2);
						border-color: #f4212e;
						color: #f4212e;
					}
				}
			}
		}
	}

	/* 浮动分析弹窗样式 */
	.analysis-tooltip {
		position: fixed;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 12px;
		padding: 0;
		max-width: 350px;
		min-width: 300px;
		backdrop-filter: blur(15px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

		.tooltip-content {
			padding: 20px;

			.analysis-details {
				.analysis-item {
					margin-bottom: 15px;

					&:last-child {
						margin-bottom: 0;
					}

					.analysis-label {
						display: block;
						font-size: 12px;
						font-weight: 600;
						color: #FFFFFF;
						margin-bottom: 5px;
						font-family: 'BioRhyme', serif;
					}

					.analysis-value {
						display: block;
						font-size: 11px;
						color: rgba(255, 255, 255, 0.8);
						line-height: 1.4;
						font-family: 'BioRhyme', serif;

						&.verified {
							color: #2FB9C5;
							font-weight: 600;
						}

						&.result-text {
							color: rgba(255, 255, 255, 0.9);
							line-height: 1.5;
							font-size: 10px;
						}
					}
				}
			}
		}
	}

	/* 响应式设计 */
	@media (max-width: 1400px) {
		.sidebar-right {
			width: 280px;
		}

		.main-content {
			margin-right: 280px;
		}
	}

	@media (max-width: 1200px) {
		.sidebar-right {
			display: none;
		}

		.main-content {
			margin-right: 0;
			width: calc(100% - 25%);
		}
	}

	/* 新闻内容样式 */
	.news-content {
		padding: 30px 28px;
	}

	.news-post {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 20px;

		.news-avatar {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			flex-shrink: 0;
			border: 1px solid rgba(255, 255, 255, 0.2);

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.news-main-content {
			flex: 1;

			.news-header {
				margin-bottom: 24px;

				.news-author-info {
					display: flex;
					align-items: center;
					gap: 6px;
					margin-bottom: 8px;
					font-size: 13px;
					font-family: 'BioRhyme', serif;
					flex-wrap: wrap;

					.author-name {
						color: #FFFFFF;
						font-weight: 700;
					}

					.author-handle {
						color: rgba(255, 255, 255, 0.65);
						font-weight: 400;
					}

					.publish-time {
						color: rgba(255, 255, 255, 0.5);
						font-weight: 400;

						&:before {
							content: "·";
							margin-right: 6px;
						}
					}
				}

				.news-title {
					font-size: 32px;
					font-weight: 800;
					color: #FFFFFF;
					line-height: 1.2;
					margin: 0 0 12px 0;
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.3px;
				}

				.news-meta {
					display: flex;
					align-items: center;
					gap: 15px;
					font-size: 14px;
					color: rgba(255, 255, 255, 0.7);
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.2px;

					.news-summary {
						color: rgba(255, 255, 255, 0.9);
					}

					.news-date {
						color: #2FB9C5;
						font-weight: 600;
					}

					.news-author {
						color: #FFFFFF;
						font-weight: 600;
					}

					.news-category {
						color: #2FB9C5;
						font-weight: 600;
					}
				}
			}

			.news-main-image {
				margin-bottom: 24px;

				img {
					width: 100%;
					height: auto;
					object-fit: cover;
					border-radius: 10px;
					margin-bottom: 8px;
					border: 0.5px solid rgba(255, 255, 255, 0.2);
				}

				.image-caption {
					font-size: 12px;
					color: rgba(255, 255, 255, 0.5);
					font-style: italic;
					line-height: 1.4;
					font-family: 'BioRhyme', serif;
				}
			}

			.news-body {
				margin-bottom: 30px;

				p {
					font-size: 16px;
					color: rgba(255, 255, 255, 0.95);
					line-height: 1.6;
					margin-bottom: 16px;
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.2px;
				}

				.highlighted-text {
					color: #2FB9C5;
					font-weight: 500;
				}

				.analyzable-text {
					cursor: pointer;
					position: relative;
					transition: all 0.2s ease;

					&:hover {
						background: rgba(47, 185, 197, 0.1);
						padding: 2px 4px;
						border-radius: 4px;
					}
				}

				.section-title {
					font-size: 20px;
					font-weight: 700;
					color: #FFFFFF;
					margin: 24px 0 16px 0;
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.3px;
				}

				.quote-block {
					margin: 24px 0;
					padding: 20px;
					background: rgba(255, 255, 255, 0.05);
					border-radius: 10px;
					border: 0.5px solid rgba(255, 255, 255, 0.1);
					font-style: italic;
					color: rgba(255, 255, 255, 0.9);
					font-size: 15px;
					line-height: 1.6;
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.2px;

					blockquote {
						margin: 0 0 10px 0;
						padding: 0;
						font-style: italic;
						color: rgba(255, 255, 255, 0.9);
						font-size: 15px;
						line-height: 1.6;
						font-family: 'BioRhyme', serif;
						letter-spacing: 0.2px;
					}

					cite {
						display: block;
						text-align: right;
						font-size: 14px;
						color: rgba(255, 255, 255, 0.7);
						font-family: 'BioRhyme', serif;
						letter-spacing: 0.2px;
					}
				}

				.news-inline-image {
					margin: 24px 0;
					display: flex;
					align-items: center;
					gap: 12px;
					flex-wrap: wrap;

					img {
						// width: 100px;
						// height: 100px;
						border-radius: 8px;
						object-fit: cover;
						border: 0.5px solid rgba(255, 255, 255, 0.2);
					}

					.inline-caption {
						font-size: 12px;
						color: rgba(255, 255, 255, 0.5);
						font-style: italic;
						line-height: 1.4;
						font-family: 'BioRhyme', serif;
					}
				}

				.news-list {
					padding-left: 0;
					margin-bottom: 24px;

					li {
						font-size: 15px;
						color: rgba(255, 255, 255, 0.95);
						line-height: 1.6;
						margin-bottom: 8px;
						font-family: 'BioRhyme', serif;
						letter-spacing: 0.2px;
					}

					.story-item {
						font-size: 15px;
						color: rgba(255, 255, 255, 0.95);
						line-height: 1.6;
						margin-bottom: 16px;
						font-family: 'BioRhyme', serif;
						letter-spacing: 0.2px;
						padding-left: 0;

						strong {
							// color: #2FB9C5;
							font-weight: 600;
						}
					}
				}

				.social-media-posts {
					margin-top: 24px;
					margin-left: -52px; // 抵消news-main-content的偏移，让头像对齐

					.social-post {
						display: flex;
						align-items: flex-start;
						gap: 12px;
						margin-bottom: 1px;
						padding: 16px 20px;
						background: transparent;
						border: none;
						border-bottom: 1px solid rgba(255, 255, 255, 0.08);
						transition: all 0.2s ease;

						&:hover {
							background: rgba(255, 255, 255, 0.03);
						}

						.post-avatar {
							width: 40px;
							height: 40px;
							border-radius: 50%;
							overflow: hidden;
							flex-shrink: 0;
							border: none;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						.post-content {
							flex: 1;
							min-width: 0; // 防止内容溢出

							.post-header {
								display: flex;
								align-items: center;
								gap: 4px;
								margin-bottom: 4px;
								font-size: 15px;
								font-family: 'BioRhyme', serif;
								flex-wrap: wrap;

								.post-author {
									color: #FFFFFF;
									font-weight: 700;
								}

								.post-handle {
									color: rgba(255, 255, 255, 0.6);
									font-weight: 400;
								}

								.post-time {
									color: rgba(255, 255, 255, 0.6);
									font-weight: 400;

									&:before {
										content: "·";
										margin: 0 4px;
									}
								}
							}

							.post-text {
								font-size: 15px;
								color: rgba(255, 255, 255, 0.95);
								line-height: 1.3;
								margin-bottom: 12px;
								font-family: 'BioRhyme', serif;
								letter-spacing: 0.2px;
							}

							.post-actions {
								display: flex;
								align-items: center;
								justify-content: space-between;
								max-width: 425px;
								margin-top: 12px;

								.action-btn {
									display: flex;
									align-items: center;
									gap: 8px;
									background: none;
									border: none;
									color: rgba(255, 255, 255, 0.6);
									cursor: pointer;
									padding: 8px;
									border-radius: 50%;
									font-size: 13px;
									font-family: 'BioRhyme', serif;
									font-weight: 400;
									transition: all 0.2s ease;
									min-width: 20px;
									height: 20px;

									&:hover {
										background: rgba(255, 255, 255, 0.1);
										color: rgba(255, 255, 255, 0.8);
									}

									svg {
										width: 18px;
										height: 18px;
										flex-shrink: 0;
										stroke-width: 2;
									}

									span {
										font-size: 13px;
										font-weight: 400;
										color: rgba(255, 255, 255, 0.6);
									}

									&.comment-btn {
										&:hover {
											background: rgba(29, 155, 240, 0.1);
											color: #1d9bf0;

											svg {
												color: #1d9bf0;
											}

											span {
												color: #1d9bf0;
											}
										}
									}

									&.repost-btn {
										&:hover {
											background: rgba(0, 186, 124, 0.1);
											color: #00ba7c;

											svg {
												color: #00ba7c;
											}

											span {
												color: #00ba7c;
											}
										}
									}

									&.like-btn {
										&:hover {
											background: rgba(249, 24, 128, 0.1);
											color: #f91880;

											svg {
												color: #f91880;
											}

											span {
												color: #f91880;
											}
										}
									}

									&.share-btn {
										&:hover {
											background: rgba(255, 255, 255, 0.1);
											color: rgba(255, 255, 255, 0.8);

											svg {
												color: rgba(255, 255, 255, 0.8);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	.aly-text {
		color: #2FB9C5 !important;
		cursor: pointer;
	}
</style>