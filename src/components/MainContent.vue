<template>
  <section class="mainSection">
    <h2>About Me</h2>
    <p>Hello! I'm Mark, a Software Engineer currently based in London, UK.</p>

    <p>I enjoy working as part of empowered teams to iteratively deliver products which delight their users.</p>
  
    <p>When I am not in front of the computer I enjoy <a href="https://boardgamegeek.com/collection/user/MarkRobbo" target="_blank">playing board games</a>, cycling and photography.</p>
  </section>
  <section class="mainSection">
    <h2>Experience</h2>
    <div class="timelineWrapper">
      <div class="timeline">
        <div class="job">
          <h3 class="company">Amazon Web Services - Senior Software Development Engineer</h3>
          <div class="description">
            <em>Oct 2022 - Present</em>
            <p>Part of a development team building and providing operational support for developer tooling used both across Amazon and by external customers.</p>
            <p>Design and development of highly available and scalable Java/Kotlin and Python based services on serverless infrastructure defined as code using AWS CDK.</p>
          </div>
        </div>
        <div class="job">
          <h3 class="company">Amazon Web Services - Software Development Engineer</h3>
          <div class="description">
            <em>Mar 2021 - Oct 2022</em>
          </div>
        </div>
        <div class="job">
          <h3 class="company">Banco Santander - Software Engineer</h3>
          <div class="description">
            <em>Oct 2019 - Mar 2021</em>
            <p>Worked within Asto, an independent "speedboat" venture focused on small business cashflow and finance.</p>
            <p>Development of an invoicing solution as part of an agile team using Java microservices, completing a migration of over 1 million invoices from a legacy system.</p>
            <p>Contributed to infrastructure as code for our platform using Terraform to provision AWS resources and supported these (including a Kubernetes cluster) in an on-call capacity.</p>
          </div>
        </div>
        <div class="job">
          <h3 class="company">American Express - Software Engineer</h3>
          <div class="description">
            <em>Sept 2017 - Sept 2019</em>
            <p>Developed microservices in Java/Kotlin using Spring Boot to implement an event driven architecture over Apache Kafka (utilizing Avro Schema for evolution and self-documentation).</p>
            <p>Actively involved in the American Express Graduate Program, both in the recruitment process conducting technical interviews and in a mentoring and direct management capacity.</p>
          </div>
        </div>
        <div class="job">
          <h3 class="company">University of Manchester - Junior Research Software Engineer</h3>
          <div class="description">
            <em>Jun 2017 - Aug 2017</em>
            <p>Continued work on my <a href="https://view.commonwl.org" target="_blank">third year project</a> as part of the eScience lab in the School of Computer Science.</p>
            <p>The open source web MVC application leverages semantic web technologies to visualise and package workflows from data-intensive scientific fields to facilitate sharing and understanding.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mainSection">
    <h2>Education</h2>
    <div class="education">
      <img src="./../assets/certificate-degree.svg" alt="degree" width="50" height="50" />  
      <div class="educationDetails">
        <h3>The University of Manchester</h3>
        <p>BSc Computer Science, First Class (82%)</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style>
section.mainSection {
  margin-left: 400px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

section.mainSection h2 {
  margin-bottom: 5px;
  font-weight: 500;
}

section.mainSection p {
  margin: 10px 0;
}

@media only screen and (max-width: 750px) {
  section.mainSection {
    margin-left: 0;
  }
}

.timeline .job {
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 40px;
}

.timeline .job .company::before {
    position: relative;
    display: block;
    box-shadow: 0 0 0 4px #b9b9b9;
    background: white;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    content: "";
    top: 16px;
    left: -47px;
}

.timeline .job .description {
  margin-top: 5px;
}

.timeline {
  height: 100%;
  border-left: 2px solid #b9b9b9;
}

.timelineWrapper {
  padding-left: 30px;
}

.education {
  padding: 10px;
}

.education img {
  float: left;
  padding: 2px 15px 20px 0;
}
</style>
