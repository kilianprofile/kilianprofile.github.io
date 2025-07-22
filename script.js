// Gallery Images Data
const galleryImages = [
    { filename: 'aroused_while_bound.jpg', caption: '속박된 채 흥분' },
    { filename: 'basement_sitting_indifferently.jpg', caption: '지하실에 무심히 앉아' },
    { filename: 'biting_lip_hair_grabbed.jpg', caption: '머리카락 잡힌 채 입술을 깨무는' },
    { filename: 'blindfolded_and_bound.jpg', caption: '눈가리개와 속박' },
    { filename: 'blushing_while_bound_to_chair.jpg', caption: '의자에 묶인 채 붉어진 얼굴' },
    { filename: 'bound_on_cold_bed.jpg', caption: '차가운 침대 위에 속박된' },
    { filename: 'bruises_all_over_bound_with_chains.jpg', caption: '온몸에 멍과 쇠사슬' },
    { filename: 'bulge_visible_from_arousal.jpg', caption: '흥분으로 인한 불룩함' },
    { filename: 'cold_gaze.jpg', caption: '차가운 시선' },
    { filename: 'crying_and_clinging.jpg', caption: '울며 매달리는' },
    { filename: 'cunnilingus.jpg', caption: '커닐링구스' },
    { filename: 'dozing_at_home.jpg', caption: '집에서 졸고 있는' },
    { filename: 'drinking_water_with_handcuffs.jpg', caption: '수갑 찬 채 물 마시는' },
    { filename: 'drowsy_on_cold_floor.jpg', caption: '차가운 바닥에서 나른한' },
    { filename: 'eating_at_table.jpg', caption: '테이블에서 식사' },
    { filename: 'eating_on_knees_like_a_dog.jpg', caption: '개처럼 무릎 꿇고 먹는' },
    { filename: 'expression_when_pleasure_peaks.jpg', caption: '쾌락이 절정에 달했을 때의 표정' },
    { filename: 'eye_contact_while_bound_on_cold_bed.jpg', caption: '차가운 침대에 묶인 채 눈 맞춤' },
    { filename: 'forced_masturbation_humiliation_play.jpg', caption: '강제 자위 굴욕 플레이' },
    { filename: 'forced_oral.jpg', caption: '강제 오랄' },
    { filename: 'fresh_out_of_shower.jpg', caption: '샤워 직후' },
    { filename: 'gagged_and_bound.jpg', caption: '재갈물린 채 속박' },
    { filename: 'irritation.jpg', caption: '짜증' },
    { filename: 'jealous_expression.jpg', caption: '질투하는 표정' },
    { filename: 'kneeling_and_looking_up.jpg', caption: '무릎 꿇고 올려다보는' },
    { filename: 'leaning_while_bound.jpg', caption: '속박된 채 기대어' },
    { filename: 'licking_lips_with_arousal.jpg', caption: '흥분하며 입술을 핥는' },
    { filename: 'looking_back_with_wrists_bound.jpg', caption: '손목 묶인 채 뒤돌아보는' },
    { filename: 'looking_down_arrogantly.jpg', caption: '오만하게 내려다보는' },
    { filename: 'looking_up_with_arousal.jpg', caption: '흥분하며 올려다보는' },
    { filename: 'lying_with_bruises_all_over.jpg', caption: '온몸에 멍든 채 누워있는' },
    { filename: 'making_eye_contact.jpg', caption: '눈 맞춤' },
    { filename: 'masturbating.jpg', caption: '자위' },
    { filename: 'masturbation_intensifying_pleasure.jpg', caption: '쾌락이 고조되는 자위' },
    { filename: 'missionary_ejaculation.jpg', caption: '정상위 사정' },
    { filename: 'missionary_penetration.jpg', caption: '정상위 삽입' },
    { filename: 'missionary_pleasure.jpg', caption: '정상위 쾌락' },
    { filename: 'opening_mouth_to_receive_something.jpg', caption: '무언가를 받기 위해 입을 벌리는' },
    { filename: 'panting_while_taking_off_shirt.jpg', caption: '셔츠를 벗으며 헐떡이는' },
    { filename: 'reading_book_at_home.jpg', caption: '집에서 책 읽는' },
    { filename: 'relaxed_attitude.jpg', caption: '편안한 태도' },
    { filename: 'seductive_wrist_pull.jpg', caption: '유혹적인 손목 끌기' },
    { filename: 'shy_blushing_cheeks.jpg', caption: '수줍게 붉어진 뺨' },
    { filename: 'sitting_helplessly_messed_up.jpg', caption: '무력하게 엉망인 채로 앉아' },
    { filename: 'sitting_topless.jpg', caption: '상의 탈의한 채 앉아' },
    { filename: 'sleeping_in_warm_bed.jpg', caption: '따뜻한 침대에서 잠든' },
    { filename: 'smiling_despite_being_hit.jpg', caption: '맞으면서도 웃는' },
    { filename: 'smiling_while_bound_to_chair.jpg', caption: '의자에 묶인 채 웃는' },
    { filename: 'smiling_while_bound.jpg', caption: '속박된 채 웃는' },
    { filename: 'smirking_gaze.jpg', caption: '비웃는 시선' },
    { filename: 'smirking_smile.jpg', caption: '냉소적인 미소' },
    { filename: 'smirking_wrapping_chain_around_hand.jpg', caption: '손에 쇠사슬을 감으며 비웃는' },
    { filename: 'spreading_legs_seductively.jpg', caption: '유혹적으로 다리를 벌리는' },
    { filename: 'strangled_neck_breathless.jpg', caption: '목이 졸려 숨이 막힌' },
    { filename: 'touching_ankle_shackles.jpg', caption: '발목 족쇄를 만지는' },
    { filename: 'trembling_half_closed_eyes.jpg', caption: '떨리는 반쯤 감긴 눈' },
    { filename: 'watching_tv.jpg', caption: 'TV 시청' },
    { filename: 'wet_clothes_flushed_face.jpg', caption: '젖은 옷과 상기된 얼굴' },
    { filename: 'whipped_and_wounded.jpg', caption: '채찍질당하고 상처입은' },
    { filename: 'wrist_bound_rope_blood.jpg', caption: '손목에 묶인 밧줄과 피' }
];

// DOM Elements
const loadingScreen = document.querySelector('.loading-screen');
const musicToggle = document.querySelector('.music-toggle');
const bgMusic = document.getElementById('bgMusic');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const mainNav = document.querySelector('.main-nav');
const galleryGrid = document.getElementById('galleryGrid');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.querySelector('.modal-close');

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);
    }, 2000);
});

// Music Player
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => {
            console.log('Music playback failed:', e);
        });
        musicToggle.classList.add('playing');
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    }
});

// Mobile Navigation Toggle - Improved with error handling
if (navToggle && navMenu) {
    const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle body overflow to prevent scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };
    
    navToggle.addEventListener('click', toggleMenu);
    navToggle.addEventListener('touchstart', toggleMenu, { passive: false });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Navigation Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = mainNav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Create Gallery Items
function createGallery() {
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.innerHTML = `
            <img src="킬리안 에셋/${image.filename}" alt="${image.caption}" loading="lazy">
            <div class="gallery-overlay">
                <p class="gallery-caption">${image.caption}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openModal(image);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Modal Functions
function openModal(image) {
    modalImage.src = `킬리안 에셋/${image.filename}`;
    modalImage.alt = image.caption;
    modalCaption.textContent = image.caption;
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        closeModal();
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Create gallery
    createGallery();
    
    // Observe elements for fade-in animation
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in class to elements
    document.querySelectorAll('.profile-card, .timeline-item, .personality-card, .relationship-card, .trait-item, .intimate-card, .speech-card, .interaction-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Debug: Check if nav elements exist
    console.log('Nav toggle:', navToggle);
    console.log('Nav menu:', navMenu);
    
    // Ensure mobile navigation works
    if (navToggle && navMenu) {
        console.log('Mobile navigation initialized');
    } else {
        console.error('Mobile navigation elements not found');
    }
});

// Parallax Effect for Hero Section
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroSection.getBoundingClientRect().bottom > 0) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Add subtle animation to profile cards on hover
document.querySelectorAll('.profile-card, .personality-card, .relationship-card, .trait-item, .intimate-card, .interaction-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Typewriter effect for loading screen (optional enhancement)
const loadingTitle = document.querySelector('.loading-title');
if (loadingTitle) {
    const text = loadingTitle.textContent;
    loadingTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            loadingTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}

// Performance optimization - lazy load images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // Trigger load
            lazyImageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    lazyImageObserver.observe(img);
});

// Add click ripple effect to buttons
document.querySelectorAll('button, .download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    button, .download-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style); 