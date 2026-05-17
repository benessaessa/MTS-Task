// Initialize Swiper when DOM is ready
  const swiper = new Swiper(".swiper-course", {
    loop: true,
    loopAdditionalSlides: 2,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    speed: 400,
    // small default
    slidesPerView: 1,
    spaceBetween: 20,

    autoHeight: false,
    centeredSlides: false,

    breakpoints: {
      // md >= 768px
      768: {
        slidesPerView: 2,
      },
      // lg >= 992px
      992: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: false,
  });

  // Optional: Add keyboard support

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      swiper.slideNext();
    } else if (event.key === "ArrowLeft") {
      swiper.slidePrev();
    }
  });

// Chart JS Initialization
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1-10 Aug', '11-20 Aug', '21-30 Aug'],
      datasets: [
        {
          label: 'Series A',
          data: [28, 44, 60],
          backgroundColor: '#6C63D5',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.45,
          categoryPercentage: 0.6,
        },
        {
          label: 'Series B',
          data: [46, 34, 30],
          backgroundColor: 'rgba(180, 170, 230, 0.65)',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.45,
          categoryPercentage: 0.6,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#555',
          bodyColor: '#6C63D5',
          borderColor: '#ddd',
          borderWidth: 1,
          padding: 10,
          cornerRadius: 8,
        }
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            color: '#aaa',
            font: { size: 12 }
          }
        },
        y: {
          min: 20,
          max: 65,
          ticks: {
            stepSize: 20,
            color: '#aaa',
            font: { size: 12 },
            callback: val => [20, 40, 60].includes(val) ? val : ''
          },
          grid: {
            color: '#ddd',
            lineWidth: 1,
          },
          border: {
            display: false,
            dash: [4, 5]
          }
        }
      }
    }
  }); 