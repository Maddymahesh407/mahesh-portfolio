// Shared case-study content. Facts come from Mahesh's resume, the existing portfolio,
// and his official internship documents (Infiposts + Vision Printt / MIMO certificates).
// The Infiposts role is "Software Development Intern" per the offer + completion letters.
import accidentDashboard from '../assets/accident-dashboard.png'
import accidentTelegram from '../assets/accident-telegram.jpeg'

export const CASE_STUDIES = {
  moro: {
    kicker: 'Case study · Industry internship · Computer Vision',
    title: 'MORO — Computer Vision at Infiposts',
    summary: 'Computer-vision and AI model development for MORO, a robotics product, during a software development internship at Infiposts.',
    problem:
      'MORO, a robotics product, needed vision capability — detecting and classifying objects from camera and video input reliably enough to act on.',
    solution:
      'Worked on the vision side of the product: preparing image and video data, developing and iterating on detection models, and running structured testing and evaluation to measure and improve accuracy. Also supported backend, routing and API handling for platform modules.',
    architecture: [
      'Image / video data — collection and preprocessing (OpenCV)',
      'Object detection model — development and iteration',
      'Testing & evaluation — accuracy measurement and tuning',
      'Integration — detection output feeding the MORO robotics product',
    ],
    role: [
      'Software Development Intern on the MORO project team.',
      'Assisted in vision model development and image/video data processing.',
      'Ran model testing and evaluation; supported AI-based object detection tasks.',
      'Assisted with backend development, routing and API handling for platform modules.',
      'Took part in technical discussions, research, and workflow optimisation; shared weekly updates in internal reviews.',
    ],
    stack: ['Python', 'Computer Vision', 'OpenCV', 'Object Detection', 'Model Evaluation', 'Backend', 'API Handling'],
    challenges:
      'Getting detection reliable enough on real-world camera and video input, and measuring model quality consistently so changes could be judged against a baseline.',
    links: 'Internship at Infiposts Private Limited (Mar–Jul 2026). Company project — source and internal environment are private. Completion certificate is linked from the Experience section.',
  },

  'iot-print': {
    kicker: 'Case study · Internship project',
    title: 'IoT Print Automation',
    summary: 'Backend + Raspberry Pi pipeline that turns incoming print requests into physical output with minimal manual steps.',
    problem:
      'Print jobs arriving through customer channels required manual handling — validating files, taking payment, and sending them to a printer — which was slow and error-prone.',
    solution:
      'Built backend services that accept jobs over REST and webhooks, process them through a queue, and hand them to a Raspberry Pi agent connected to the printer. Payment and messaging were integrated so the flow runs end to end.',
    architecture: [
      'Backend service — REST APIs + webhook receivers',
      'Print queue — ordered job processing and status tracking',
      'Raspberry Pi agent — pulls jobs and drives the printer',
      'Printer — physical output',
    ],
    role: [
      'Built production backend systems in Python and Node.js.',
      'Designed and deployed 5+ secure REST APIs; handled 500+ daily API requests.',
      'Implemented webhook-based real-time event processing.',
      'Integrated the WhatsApp Cloud API and two payment gateways.',
      'Developed the Raspberry Pi print-queue automation and troubleshot device connectivity.',
    ],
    stack: ['Python', 'Node.js', 'REST API', 'Webhooks', 'WhatsApp Cloud API', 'Raspberry Pi', 'IoT'],
    challenges:
      'Device-level connectivity between the backend and the Raspberry Pi agent was the main source of failures; debugging and hardening that link was where most of the reliability work went.',
    results: [
      'Reduced manual intervention by approximately 60%.',
      'Improved print-throughput efficiency through queue-based processing.',
      'Stabilised device connectivity between backend and printer agent.',
    ],
    links: 'Company project — source is private.',
  },

  accident: {
    kicker: 'Case study · AI / Computer Vision',
    title: 'AI-Based Real-Time Accident Detection System',
    summary: 'Computer-vision system that detects accidents from live video streams and raises automated alerts.',
    problem:
      'Accidents on monitored roads or sites often go unnoticed until someone reports them, delaying response. A system was needed to flag likely accidents from existing video feeds in real time.',
    solution:
      'A pipeline that reads video frames with OpenCV, runs YOLOv8 detection on each frame, validates detections against a confidence threshold, surfaces them on a Flask monitoring dashboard, and sends a Telegram alert when an accident is confirmed.',
    architecture: [
      'Video stream → OpenCV frame processing',
      'YOLOv8 detection on processed frames',
      'Confidence validation to filter weak detections',
      'Flask monitoring dashboard for live status',
      'Telegram alert on confirmed detection',
    ],
    role: [
      'Built the OpenCV frame-processing and stream-handling layer.',
      'Integrated and tuned the YOLOv8 detection model.',
      'Implemented confidence validation to cut false positives.',
      'Built the Flask dashboard and the Telegram alert trigger.',
    ],
    stack: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'Telegram API'],
    challenges:
      'Balancing detection sensitivity against false alarms — the confidence-validation step was iterated on to bring false positives down while keeping real events.',
    results: [
      '87%+ detection accuracy on the evaluated data.',
      '~35% reduction in false positives after confidence validation.',
    ],
    screenshots: [
      {
        src: accidentDashboard,
        alt: 'Flask monitoring dashboard running detection on an uploaded video, with an "Accident 1.00" label overlaid on the frame',
        caption: 'Flask monitoring dashboard — live detection with the confidence score overlaid on each frame.',
      },
      {
        src: accidentTelegram,
        alt: 'Telegram bot conversation showing two automated "Accident Detected" alerts, each with a confidence score, a Google Maps location link and a timestamp',
        caption: 'Telegram bot — automated alert with prediction confidence, GPS location and timestamp.',
      },
    ],
    links: 'Source: github.com/Maddymahesh407/Accident-Detection',
  },

  ebook: {
    kicker: 'Case study · Full Stack',
    title: 'E-Book Buying System',
    summary: 'A Flask + Firebase web app for browsing and "buying" e-books with a simulated payment workflow.',
    problem: 'A learning project to build a complete catalog-and-checkout flow end to end.',
    solution:
      'A Flask backend exposing REST APIs, Firebase for authentication and data, a browsable book catalog, cart management, and a simulated payment workflow that completes an order.',
    architecture: [
      'User → Flask REST APIs',
      'Firebase Authentication + data store',
      'Catalog & cart logic',
      'Simulated checkout / order completion',
    ],
    role: [
      'Built the Flask REST API layer.',
      'Wired Firebase auth and data.',
      'Implemented catalog, cart and the simulated payment flow.',
    ],
    stack: ['Flask', 'Firebase', 'REST APIs'],
    results: ['Working authentication, catalog browsing, cart management and a simulated checkout.'],
    links: 'Source available on request.',
  },
}
