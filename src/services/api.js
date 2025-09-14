const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Mock data for development/testing
const mockProfileData = {
  "name": "Tom Boone",
  "profession": "Application Developer & DevOps Engineer",
  "email": "tom@tomboone.com",
  "github_link": "tomboone",
  "linkedin_link": "tom-boone-89a050221",
  "summary_text": "<p>I've been developing web applications and technology solutions since 2004, working across various industries with a focus on building <strong>scalable, user-centered applications</strong>.</p>\n<p>I work with a variety of programming languages—including <strong>Python</strong>, <strong>PHP</strong>, <strong>JavaScript</strong>, and <strong>HTML/CSS</strong>—and platforms/frameworks—including <strong>Flask</strong>, <strong>FastAPI</strong>, <strong>Symfony</strong>, <strong>Drupal</strong>, <strong>WordPress</strong>, and cloud platforms like <strong>Azure</strong> and <strong>AWS</strong>.</p>\n<p>My experience spans microservice orchestration (<strong>Azure Functions</strong>, <strong>AWS Lambda</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>), event-driven architecture (<strong>Azure Storage Queue</strong>, <strong>RabbitMQ</strong>, <strong>Redis</strong>, <strong>Kafka</strong>, <strong>Celery</strong>), CI/CD pipeline implementation (<strong>GitHub Actions</strong>, <strong>Jenkins</strong>), Infrastructure as Code (<strong>Terraform</strong>), and database design with both SQL (<strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>SQL Server</strong>) and NoSQL (<strong>MongoDB</strong>, <strong>Azure Cosmos DB</strong>, <strong>AWS DynamoDB</strong>) systems.</p>",
  "projects": [
    { "description": "Microservices architecture migration from monolithic web applications", "order_index": 1, "id": 1 },
    { "description": "CI/CD pipeline implementation using GitHub Actions for automated deployment", "order_index": 2, "id": 2 },
    { "description": "Event-driven architecture design and implementation", "order_index": 3, "id": 3 },
    { "description": "Custom subscription management system for legal research platform", "order_index": 4, "id": 4 },
    { "description": "Conference scheduling web application with personal attendee profiles", "order_index": 5, "id": 5 },
    { "description": "Custom learning management system for online courses", "order_index": 6, "id": 6 },
    { "description": "Federal judicial appointment tracking application", "order_index": 7, "id": 7 },
    { "description": "Digital content migration and batch processing systems", "order_index": 8, "id": 8 }
  ],
  "work_experiences": [
    { "employer_name": "Washington Research Library Consortium", "position": "Applications Integration Developer", "order_index": 1, "id": 1 },
    { "employer_name": "Georgetown Law Center", "position": "Associate Law Librarian for Electronic Resources & Services", "order_index": 2, "id": 2 },
    { "employer_name": "Harvard Law School", "position": "Faculty Services Librarian", "order_index": 3, "id": 3 },
    { "employer_name": "Loyola Law School, Los Angeles", "position": "Reference Librarian", "order_index": 4, "id": 4 },
    { "employer_name": "Yale Law School", "position": "Reference Librarian for Electronic Services", "order_index": 5, "id": 5 },
    { "employer_name": "University of Nevada-Las Vegas School of Law", "position": "Head of Electronic & Information Services", "order_index": 6, "id": 6 }
  ],
  "consulting_work": [
    { "employer_name": "Cannabis Law Digest", "position": "Full-stack application development", "order_index": 1, "id": 1 },
    { "employer_name": "Brooks Digital", "position": "PHP development and technical leadership", "order_index": 2, "id": 2 },
    { "employer_name": "GlobalGalPal", "position": "Web application consulting", "order_index": 3, "id": 3 },
    { "employer_name": "CALI", "position": "Legal education technology", "order_index": 4, "id": 4 },
    { "employer_name": "Portland State University Library", "position": "Web development", "order_index": 5, "id": 5 },
    { "employer_name": "Kreitzberg Library", "position": "Technology solutions", "order_index": 6, "id": 6 }
  ],
  "education": [
    { "degree_type": "MLS", "university_name": "Indiana University, School of Library and Information Science", "order_index": 1, "id": 1 },
    { "degree_type": "JD", "university_name": "University of Louisville, Louis J. Brandeis School of Law", "order_index": 2, "id": 2 },
    { "degree_type": "BA, Communications", "university_name": "Bellarmine University", "order_index": 3, "id": 3 }
  ]
};

export const fetchProfile = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/profile`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};