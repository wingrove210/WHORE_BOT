import React from 'react';
import '../Loading.css';
import loading from '../img/loading.gif'


const AnimatedSilhouette = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="Loader">
        {/* <img src={loading} alt="" className='w-1/2 h-1/2 rounded-full' /> */}
        <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M509.875 269.703C505.668 272.561 505.581 276.995 504.398 280.916C502.528 287.119 499.923 292.836 493.597 295.73C491.698 296.598 489.557 299.34 487.503 296.562C485.638 294.041 485.351 290.84 487.49 288.175C488.709 286.655 490.395 285.433 492.054 284.359C495.628 282.045 497.695 279.279 496.112 274.773C495.554 273.185 495.64 271.371 496.499 269.896C499.911 264.037 502.73 257.64 507.07 252.552C516.883 241.049 537.287 245.171 544.287 258.844C546.52 263.206 545.435 267.674 542.734 271.624C540.62 274.715 538.935 277.848 539.237 281.774C539.39 283.757 538.832 285.481 536.36 285.61C533.407 285.764 533.491 288.686 532.579 290.311C530.131 294.673 527.28 295.351 523.243 292.756C522.299 292.15 521.279 291.496 520.027 291.808C519.966 298.053 521.555 300.368 527.246 301.885C530.292 302.696 533.412 303.253 536.521 303.798C544.963 305.28 548.593 308.812 550.549 317.147C552.936 327.323 552.217 337.602 552.377 348.199C549.293 347.737 549.127 345.411 548.373 343.819C544.814 336.296 541.428 328.744 536.416 321.955C533.457 317.948 528.496 318.133 525.138 315.172C524.044 314.208 522.815 315.916 521.908 316.854C513.007 326.056 514.719 339.812 525.678 346.181C528.398 347.761 529.946 349.882 530.206 352.89C531.158 363.904 535.848 372.913 542.944 381.467C552.513 393.001 554.176 406.37 547.712 420.314C545.261 425.6 542.853 430.907 540.428 436.206C540.289 436.508 540.204 436.84 540.037 437.124C537.492 441.43 519.074 441.204 516.614 436.843C515.2 434.336 516.219 431.94 517.095 429.632C520.185 421.496 524.271 413.889 529.45 406.878C530.301 405.726 531.553 404.723 531.438 403.112C529.59 401.44 528.137 402.493 526.951 403.626C525.152 405.344 523.306 407.106 521.925 409.15C517.199 416.148 517.287 416.18 510.528 410.819C509.28 409.829 508.252 408.302 506.022 408.593C504.576 411.471 507.04 412.967 508.646 414.014C514.54 417.856 516.487 422.234 512.035 428.473C511.025 429.89 511.01 431.978 510.28 433.645C509.377 435.707 510.432 439.24 506.742 439.338C502.899 439.439 499.168 439.252 496.885 435.061C488.061 418.861 483.797 402.101 488.923 383.683C491.905 372.965 494.756 362.169 495.742 351.017C495.93 348.9 497.171 347.802 498.862 346.867C510.283 340.555 509.558 326.84 503.998 318.02C502.17 315.12 500.083 315.437 496.808 316.42C485.602 319.785 482.395 329.074 478.956 338.457C477.153 343.375 475.976 348.56 473.28 353.537C471.016 352.077 470.761 350.251 471.011 348.505C472.204 340.206 471.378 331.869 471.645 323.555C472.022 311.832 476.335 305.834 487.675 303.348C499.673 300.717 506.905 293.827 508.785 281.754C509.81 275.172 512.887 272.133 519.78 271.411C526.282 270.73 531.874 266.86 536.817 262.523C538.357 261.172 539.814 259.417 539.111 257.025C538.527 256.888 538.071 256.643 537.925 256.766C529.86 263.587 520.415 267.385 509.875 269.703ZM508.143 305.847C507.523 309.399 510.143 314.86 512.932 314.793C516.924 314.697 518.373 311.288 520.052 307.929C518.022 307.929 516.184 307.414 514.86 308.021C509.744 310.365 509.552 307.858 511.016 303.182C509.716 304.308 509.112 304.831 508.143 305.847Z" fill="white" />
          <path d="M398.065 533.933C391.422 527.138 385.026 520.595 378.723 514.145C376.552 515.212 377.244 516.73 377.239 517.877C377.181 529.375 377.32 540.875 377.177 552.372C377.108 557.865 378.715 562.135 383.895 564.68C385.351 565.396 387.17 566.333 386.753 568.316C386.311 570.422 384.228 570.174 382.622 570.189C376.624 570.244 370.625 570.218 364.626 570.188C362.937 570.179 361.152 570.105 360.488 568.138C359.862 566.284 361.328 565.45 362.553 564.594C365.527 562.517 366.599 559.626 366.911 556.063C368.531 537.592 367.33 519.094 367.631 500.612C367.692 496.921 365.289 494.923 362.244 493.513C360.651 492.776 358.601 492.764 357.828 490.731C362.735 486.549 372.039 486.98 376.625 491.974C392.073 508.795 408.754 524.401 424.581 540.846C425.256 541.549 426.042 542.145 426.777 542.792C428.32 541.671 427.74 540.222 427.741 538.999C427.75 528.167 427.721 517.335 427.637 506.504C427.592 500.677 427.082 495.042 420.471 492.517C419.682 492.216 419.329 491.348 419.432 490.429C419.706 489.526 420.41 488.982 421.248 488.946C428.398 488.635 435.55 488.339 442.705 488.17C444.149 488.136 445.91 488.341 446.232 490.254C446.508 491.892 445.125 492.63 443.916 493.124C438.472 495.348 437.052 499.425 437.126 505.084C437.39 525.245 437.235 545.411 437.222 565.575C437.221 567.213 437.554 568.91 436.081 571.487C422.608 559.67 410.858 546.508 398.065 533.933Z" fill="white" />
          <path d="M477.014 562.024C463.3 549.71 458.656 531.62 464.702 514.911C470.53 498.803 486.766 487.331 504.289 486.767C512.528 486.501 520.573 487.12 528.337 490.189C535.242 492.919 536.188 494.223 534.749 501.349C534.278 503.684 535.26 507.195 532.546 508.079C529.439 509.091 528.405 505.383 526.636 503.605C517.552 494.481 506.591 494.763 495.401 497.666C485.109 500.336 479.468 507.695 478.067 518.026C475.934 533.758 478.122 547.999 492.915 557.507C500.897 562.638 509.673 562.319 518.533 561.745C520.494 561.618 521.573 560.42 521.554 558.453C521.503 552.959 521.494 547.461 521.259 541.974C521.071 537.573 518.657 534.993 514.257 534.156C512.571 533.836 510.144 533.701 510.535 531.102C510.898 528.682 513.21 528.939 514.979 528.927C522.812 528.878 530.645 528.894 538.478 528.956C540.284 528.971 542.487 528.894 542.902 531.243C543.28 533.383 541.302 533.907 539.752 534.468C536.21 535.75 535.111 538.481 535.147 541.947C535.217 548.613 535.228 555.279 535.359 561.944C535.41 564.495 534.948 566.527 532.171 567.429C516.177 572.623 500.218 573.912 484.423 566.807C481.878 565.662 479.66 563.789 477.014 562.024Z" fill="white" />
          <path d="M610.84 505.13C609.183 505.749 608.163 505.219 607.602 504.066C604.709 498.127 599.37 497.385 593.66 497.407C580.742 497.458 582.532 496.088 582.372 508.496C582.325 512.161 582.364 515.83 582.201 519.49C582.071 522.432 583.181 523.808 586.247 523.686C589.74 523.547 593.243 523.66 596.741 523.64C599.072 523.627 600.945 522.827 602.025 520.583C602.676 519.23 603.363 517.706 605.304 518.203C607.449 518.752 607.327 520.601 607.31 522.258C607.268 526.42 607.251 530.587 607.028 534.741C606.94 536.377 606.529 538.243 604.571 538.705C602.709 539.144 602.003 537.551 601.281 536.236C599.783 533.51 597.282 532.96 594.471 533.012C592.805 533.042 591.139 533.011 589.473 533.022C582.251 533.072 582.253 533.074 582.282 540.093C582.3 544.258 582.225 548.425 582.339 552.587C582.509 558.777 584.232 560.455 590.534 560.705C593.197 560.811 595.887 560.554 598.526 560.832C605.51 561.568 610.502 559.126 613.276 552.452C614.188 550.257 615.538 548.035 618.542 549.403C621.515 550.757 620.489 553.262 619.88 555.477C615.803 570.3 615.79 570.298 600.679 570.272C588.853 570.251 577.027 570.228 565.201 570.2C564.201 570.197 563.199 570.199 562.205 570.116C560.805 569.998 559.491 569.571 559.246 567.968C559.028 566.539 560.162 565.866 561.256 565.464C566.888 563.397 568.52 558.61 568.544 553.478C568.624 536.002 569.435 518.51 567.833 501.05C567.531 497.759 566.283 495.385 563.424 493.74C561.954 492.894 559.399 492.5 560.213 490.063C560.921 487.944 563.275 488.409 565.023 488.416C576.017 488.46 587.01 488.643 598.003 488.666C601.493 488.673 604.982 488.3 608.474 488.157C610.779 488.062 613.312 488.361 613.07 491.315C612.697 495.875 613.039 500.581 610.84 505.13Z" fill="white" />
          <path d="M322.209 569.101C320.537 567.854 320.88 566.684 321.501 565.369C323.675 560.77 321.38 548.235 317.88 545.056C316.909 544.174 315.777 544.185 314.61 544.188C308.95 544.201 303.286 544.328 297.629 544.184C294.484 544.103 292.582 545.488 291.497 548.251C290.22 551.502 288.948 554.758 287.784 558.051C286.674 561.191 288.632 563.045 290.831 564.729C291.999 565.624 293.617 566.346 292.857 568.231C292.212 569.832 290.645 570.192 289.111 570.187C283.452 570.168 277.79 570.147 272.135 569.955C270.33 569.894 268.31 569.508 267.971 567.171C267.638 564.866 269.706 564.569 271.144 563.967C275.497 562.146 277.866 558.516 279.501 554.469C284.734 541.514 289.757 528.474 294.87 515.47C297.975 507.573 301.064 499.67 304.236 491.8C304.895 490.162 305.354 487.994 307.613 487.918C310.092 487.835 310.791 489.991 311.535 491.845C318.84 510.066 326.079 528.314 333.447 546.509C336.416 553.84 338.45 561.96 347.33 564.897C348.495 565.282 349.318 566.26 349.082 567.598C348.784 569.287 347.269 569.362 345.976 569.558C338.169 570.742 330.381 570.029 322.209 569.101ZM309.835 522.597C308.395 519.517 307.853 516.016 305.264 512.426C302.174 519.855 299.674 526.617 298.124 534.489C303.615 534.183 308.302 533.921 313.222 533.647C313.073 529.546 310.999 526.602 309.835 522.597Z" fill="white" />
          <path d="M716.203 509.969C717.201 490.276 734.633 486.108 748.282 487.07C749.106 487.128 749.914 487.518 750.732 487.528C762.276 487.67 763.735 495.182 760.2 505.882C757.656 506.406 756.771 504.299 755.605 502.817C750.69 496.569 744.052 495.183 736.764 496.511C729.953 497.752 727.203 504.204 730.46 510.352C732.232 513.694 735.008 516.074 738.06 518.141C742.607 521.22 747.327 524.053 751.782 527.258C759.709 532.963 765.345 540.402 762.778 550.548C760.023 561.435 752.756 568.752 741.317 571.199C734.217 572.718 727.399 571.583 720.827 568.874C713.871 566.006 710.086 555.246 713.695 548.857C715.262 546.082 717.015 547.209 718.216 549.153C719.786 551.694 720.987 554.438 723.117 556.639C728.385 562.082 734.72 563.595 741.863 561.651C748.358 559.883 751.424 552.351 748.14 546.459C745.804 542.269 742.002 539.539 738.129 536.89C733.734 533.886 729.26 530.962 725.12 527.632C719.681 523.257 716.779 517.368 716.203 509.969Z" fill="white" />
          <path d="M586.757 322.018C586.902 314.507 586.75 307.578 584.019 300.896C580.081 291.265 572.61 287.148 562.481 289.266C557.669 290.272 555.198 293.767 553.412 297.806C551.947 301.119 550.431 302.589 546.66 300.53C542.741 298.391 543.772 296.041 545.342 293.133C550.35 283.86 557.235 277.058 568.537 278.115C581.433 279.321 590.389 286.493 595.145 298.569C596.988 303.249 597.431 308.238 597.416 313.291C597.313 347.77 597.302 382.25 597.193 416.729C597.185 419.213 598.227 422.701 594.543 423.363C591.006 423.999 589.324 421.058 587.956 418.294C586.811 415.982 586.832 413.476 586.831 410.961C586.821 381.479 586.786 351.997 586.757 322.018Z" fill="white" />
          <path d="M438.683 332C439.017 320.889 437.499 310.179 440.836 299.739C445.334 285.671 457.222 276.715 470.542 277.716C472.514 277.864 474.52 278.261 476.394 278.89C482.962 281.09 483.378 281.956 480.565 288.229C479.449 290.718 479.664 293.034 480.333 295.489C481.032 298.052 480.587 300.223 477.724 301.047C474.678 301.923 473.708 305.363 470.267 306.907C468.935 299.756 468.979 293.762 476.799 290.583C470.661 285.989 460.537 287.639 455.77 293.589C451.227 299.261 449.209 305.854 449.218 313.09C449.262 345.919 449.238 378.749 449.429 411.578C449.457 416.377 448.118 420.046 444.078 422.612C442.815 423.415 441.414 424.223 439.871 423.481C438.125 422.641 438.647 420.938 438.648 419.491C438.653 390.494 438.67 361.497 438.683 332Z" fill="white" />
          <path d="M691.4 555.43C692.62 553.6 693.604 552.053 694.648 550.547C695.602 549.17 696.897 548.583 698.544 549.201C700.27 549.849 700.682 551.282 700.328 552.868C699.092 558.411 697.102 563.709 694.704 568.841C693.88 570.602 692.109 570.612 690.364 570.592C674.719 570.407 659.082 569.378 643.426 570.15C641.493 570.245 638.995 570.754 638.138 568.443C637.141 565.756 639.942 565.382 641.475 564.314C644.259 562.374 645.613 559.675 645.919 556.317C647.634 537.505 646.637 518.704 645.745 499.902C645.566 496.14 643.056 494.413 639.942 493.182C638.8 492.731 637.876 492.018 637.899 490.644C637.924 489.147 639.079 488.5 640.241 488.559C649.022 489.004 657.841 487.509 666.589 489.088C666.964 489.156 667.239 489.775 667.522 490.093C667.478 490.514 667.556 491.043 667.396 491.129C660.362 494.897 660.049 501.298 660.172 508.233C660.431 522.894 660.23 537.562 660.31 552.227C660.341 558.004 661.978 559.687 667.699 559.871C672.694 560.031 677.699 559.85 682.696 559.967C686.334 560.052 689.198 558.826 691.4 555.43Z" fill="white" />
          <path d="M454.666 349C454.663 335.503 454.724 322.505 454.627 309.509C454.591 304.525 456.569 300.474 459.738 296.88C460.744 295.74 462.159 294.796 463.714 295.339C465.511 295.967 465.198 297.778 465.124 299.231C464.189 317.519 465.316 335.82 464.567 354.126C464.011 367.742 464.826 381.418 465.138 395.064C465.231 399.094 464.449 402.688 461.353 405.467C459.94 406.735 458.276 407.62 456.336 406.819C454.365 406.005 454.676 404.107 454.674 402.488C454.651 384.825 454.664 367.163 454.666 349Z" fill="white" />
          <path d="M581.332 350.01C581.011 367.318 582.551 384.127 581.327 400.936C581.155 403.303 582.055 406.541 578.463 406.872C575.061 407.186 572.879 404.895 571.971 401.74C571.524 400.183 571.607 398.446 571.607 396.791C571.616 368.306 571.586 339.82 571.731 311.335C571.759 305.92 569.785 300.934 568.99 295.565C572.821 293.64 575.434 295.243 577.77 297.959C582.061 302.947 581.878 309.149 581.928 315.056C582.026 326.539 581.562 338.027 581.332 350.01Z" fill="white" />
          <path d="M556.795 318.082C556.349 315.351 556.274 312.938 555.472 310.797C553.596 305.793 556.327 301.986 558.644 298.273C560.617 295.109 564.806 295.973 565.854 299.77C566.682 302.768 566.851 306.017 566.866 309.157C566.927 322.142 567.066 335.12 566.555 348.113C566.156 358.24 566.899 368.412 567.131 378.563C567.157 379.729 567.235 380.901 567.152 382.06C566.92 385.296 567.718 389.121 563.949 390.836C560.972 392.189 558.968 389.908 557.158 387.9C554.382 384.82 553.683 381.688 556.499 378.077C558.914 374.98 560.095 371.249 559.867 367.314C558.926 351.047 557.857 334.787 556.795 318.082Z" fill="white" />
          <path d="M532.194 344.988C530.599 342.465 528.2 341.501 526.197 340.043C520.116 335.618 518.81 327.443 523.183 321.497C525.241 318.698 527.025 320.625 528.65 321.835C535.554 326.975 539.913 334.02 543 341.882C545.201 347.486 547.393 353.023 551.662 357.482C553.182 359.07 553.934 361.162 554.133 363.378C554.489 367.354 551.233 373.694 548.287 374.166C543.864 374.874 542.399 371.143 540.538 368.29C535.977 361.3 535.235 352.925 532.194 344.988Z" fill="white" />
          <path d="M482.974 341.114C485.844 334.342 488.144 327.678 493.686 322.924C498.868 318.478 500.444 318.864 502.489 325.147C504.893 332.53 504.155 335.704 497.88 340.635C494.666 343.161 492.929 346.113 491.931 350.003C490.285 356.423 488.684 362.922 485.303 368.734C481.841 374.686 477.74 374.742 474.091 368.817C472.802 366.725 471.898 364.346 471.137 361.994C470.491 359.995 470.763 357.444 472.676 356.64C479.527 353.762 480.522 347.23 482.974 341.114Z" fill="white" />
          <path d="M664 643.853C670.817 643.819 677.134 643.809 683.45 643.727C686.334 643.689 688.386 644.398 688.196 647.875C688.027 650.968 686.198 651.623 683.482 651.604C657.883 651.418 632.284 651.271 606.684 651.189C603.635 651.18 601.46 650.788 601.607 646.941C601.729 643.735 603.448 643.05 606.168 643.199C625.269 644.243 644.391 643.519 664 643.853Z" fill="white" />
          <path d="M388.999 643.84C401.972 643.818 414.445 643.796 426.918 643.774C427.584 643.772 428.249 643.768 428.914 643.776C431.486 643.806 433.017 645.008 433.081 647.67C433.15 650.549 431.335 651.312 428.847 651.313C422.028 651.315 415.209 651.312 408.39 651.376C390.766 651.541 373.142 651.755 355.518 651.91C353.104 651.931 350.235 652.528 349.803 648.815C349.336 644.793 351.886 644.061 355.07 644.042C366.213 643.976 377.356 643.907 388.999 643.84Z" fill="white" />
          <path d="M530.832 682.245C528.778 679.818 526.963 677.668 524.391 674.621C524.391 677.85 524.36 680.179 524.402 682.507C524.432 684.178 524.074 685.583 522.104 685.675C520.109 685.768 518.947 684.681 518.929 682.677C518.882 677.362 518.698 672.035 518.999 666.737C519.195 663.269 521.911 662.408 524.545 665.002C527.23 667.646 529.491 670.721 532.589 674.376C532.758 671.172 532.857 668.781 533.018 666.394C533.15 664.448 534.055 663.231 536.195 663.51C538.224 663.775 539.124 665.052 538.773 667.011C538.002 671.304 538.412 675.629 538.241 679.938C538.16 681.974 539.224 684.729 536.682 685.734C533.966 686.808 532.706 684.05 530.832 682.245Z" fill="white" />
          <path d="M481.051 678.202C477.937 676.709 478.544 674.652 480.786 673.906C483.323 673.062 486.84 672.617 488.329 675.629C489.724 678.453 489.872 681.85 486.853 684.222C482.445 687.686 477.321 687.672 473.053 684.306C468.323 680.574 466.743 675.337 468.944 670.689C471.229 665.864 477.078 662.685 482.095 663.737C484.485 664.238 487.641 664.816 487.081 668.049C486.529 671.231 483.715 669.634 481.721 669.365C478.521 668.932 475.508 669.146 474.549 672.908C473.728 676.13 474.663 678.903 477.959 680.309C479.747 681.072 481.757 681.159 482.767 679.17C483.499 677.727 481.991 678.343 481.051 678.202Z" fill="white" />
          <path d="M519.567 633.671C525.171 629.01 529.599 628.522 534.262 631.8C538.685 634.911 540.42 640.225 538.552 644.937C536.595 649.87 531.583 652.646 526.225 652.343C519.547 651.965 512.579 640.855 519.567 633.671ZM524.712 636.165C523.39 637.001 522.497 638.151 522.326 639.728C521.957 643.142 523.374 645.635 526.674 646.53C529.839 647.388 532.32 645.885 533.303 642.87C534.383 639.553 532.773 637.104 529.693 635.703C528.297 635.068 526.797 635.186 524.712 636.165Z" fill="white" />
          <path d="M563.05 649.733C561.296 652.959 559.156 653.046 557.028 650.255C555.783 648.621 555.494 646.116 552.903 645.72C550.751 646.534 551.404 648.47 551.106 649.983C550.843 651.314 550.117 652.029 548.758 652.071C547.225 652.118 545.975 651.434 545.943 649.902C545.821 643.942 545.856 637.979 545.918 632.018C545.924 631.456 546.409 630.56 546.874 630.397C550.643 629.077 554.413 629.661 558.046 630.921C560.734 631.853 562.373 633.983 562.892 636.774C563.06 637.678 562.967 639.012 562.412 639.607C559.134 643.124 560.84 646.245 563.05 649.733ZM554.635 635.639C553.097 635.349 551.561 635.148 551.222 637.268C551.043 638.387 551.632 639.23 552.706 639.503C554.206 639.885 555.751 639.869 556.674 638.37C557.615 636.844 556.284 636.399 554.635 635.639Z" fill="white" />
          <path d="M459.394 643.076C457.31 643.891 454.929 642.609 453.585 645.099C454.811 648.053 457.476 646.655 459.499 646.899C461.574 647.149 463.786 647.289 463.819 649.937C463.853 652.712 461.445 652.231 459.733 652.236C443.478 652.28 447.493 653.422 447.444 639.696C447.41 629.916 447.951 629.914 457.853 630.004C458.683 630.012 459.517 629.982 460.343 630.049C462.188 630.199 464.251 630.24 464.096 632.892C463.962 635.172 462.1 635.101 460.427 635.334C458.121 635.655 455.471 634.403 453.458 636.62C454.277 639.659 456.694 638.377 458.426 638.713C461.551 639.32 462.149 640.654 459.394 643.076Z" fill="white" />
          <path d="M509.376 674.999C508.522 677.367 506.715 677.093 505.09 677.237C503.881 677.344 502.598 677.517 502.73 679.122C502.858 680.679 504.187 680.698 505.369 680.743C506.034 680.768 506.7 680.73 507.365 680.744C509.395 680.787 511.812 680.695 511.691 683.534C511.575 686.253 509.138 686.109 507.136 686.224C495.834 686.87 495.83 686.871 495.786 675.66C495.772 671.865 495.784 668.07 495.784 663.921C500.447 663.921 504.708 663.88 508.967 663.945C510.341 663.966 511.721 664.387 511.904 666.051C512.123 668.042 510.638 668.532 509.088 668.834C506.659 669.309 503.895 668.378 501.526 670.164C503.495 673.576 508.501 670.316 509.376 674.999Z" fill="white" />
          <path d="M461.847 680.145C462.561 682.012 463.759 683.365 463.188 685.488C460.734 686.613 458.714 687.077 456.757 683.926C454.385 680.106 450.763 680.265 448.28 684.152C446.899 686.315 445.255 686.734 443.265 685.795C441.018 684.734 442.294 682.891 442.893 681.492C444.983 676.611 447.248 671.806 449.392 666.948C450.203 665.109 451.394 663.882 453.515 663.982C455.568 664.079 456.187 665.754 456.801 667.285C458.468 671.442 460.06 675.629 461.847 680.145Z" fill="white" />
          <path d="M482.931 630.549C484.709 631.366 486.081 632.173 485.321 634.05C484.621 635.781 483.104 635.707 481.521 635.466C480.106 635.252 478.617 634.759 476.885 635.91C478.292 638.403 481.022 638.57 482.976 639.83C485.282 641.315 487.578 642.933 486.801 646.113C485.815 650.147 482.536 651.938 478.895 652.879C475.886 653.658 473.368 652.271 471.441 649.963C470.628 648.99 470.638 647.792 471.498 646.768C472.398 645.698 473.613 645.682 474.648 646.355C476.764 647.732 478.572 647.84 480.175 645.745C479.836 643.635 478.088 643.667 476.795 643.144C473.202 641.692 469.988 639.903 471.086 635.208C471.903 631.718 476.333 629.341 480.668 629.846C481.315 629.922 481.936 630.219 482.931 630.549Z" fill="white" />
          <path d="M545.392 670.981C550.296 663.261 554.843 661.279 560.097 664.372C561.615 665.266 563.728 666.162 562.649 668.488C561.749 670.427 559.918 670.079 558.319 669.281C555.536 667.892 553.469 668.953 551.831 671.17C550.494 672.979 549.72 674.993 551.036 677.195C552.524 679.685 554.825 680.252 557.505 679.818C558.16 679.712 558.799 679.511 559.448 679.367C561.071 679.007 562.558 679.237 563.114 680.99C563.606 682.545 562.408 683.512 561.254 684.168C558.116 685.952 554.841 687.095 551.341 685.098C547.703 683.022 544.959 680.227 544.725 675.777C544.647 674.314 545.047 672.826 545.392 670.981Z" fill="white" />
          <path d="M497.314 632.147C500.532 629.935 503.617 628.96 507.014 630.561C508.794 631.4 511.167 632.253 510.426 634.733C509.614 637.451 507.349 636.489 505.412 635.844C502.047 634.724 499.832 636.283 498.676 639.25C497.544 642.154 498.812 644.436 501.385 646.009C502.911 646.942 504.535 647.004 506.177 646.334C507.949 645.612 509.878 644.868 510.817 647.263C511.72 649.565 509.646 650.501 508.162 651.454C504.459 653.832 499.819 652.838 496.052 648.993C492.321 645.184 491.451 639.846 494.045 635.731C494.829 634.487 496.012 633.495 497.314 632.147Z" fill="white" />
          <path d="M586.949 631.097C587.564 634.08 586.398 635.366 583.88 635.288C580.606 635.187 580.044 637.131 580.111 639.799C580.186 642.793 580.155 645.792 580.119 648.788C580.098 650.576 579.725 652.231 577.429 652.157C575.243 652.088 574.758 650.502 574.714 648.696C574.665 646.7 574.678 644.702 574.671 642.705C574.657 639.123 575.66 634.983 569.755 635.049C568.454 635.064 568.041 633.623 568.268 632.334C568.503 630.999 568.819 629.388 570.542 629.593C575.936 630.236 581.471 628.712 586.949 631.097Z" fill="white" />
          <path d="M570.592 669.422C569.823 667.607 568.424 666.37 568.982 664.324C574.506 662.217 574.806 668.376 577.699 670.145C581.863 669.491 581.299 661.081 587.84 664.477C587.774 668.284 584.922 670.656 583.036 673.38C581.242 675.972 579.858 678.296 580.89 681.604C581.441 683.369 581.392 685.537 578.877 685.893C575.921 686.312 575.677 684.062 575.824 681.977C576.176 677.018 572.635 673.739 570.592 669.422Z" fill="white" />
          <path d="M470.448 389.113C469.552 384.368 469.76 380.033 470.138 374.852C473.952 377.35 477.344 379.017 480.011 381.472C482.804 384.042 479.891 386.361 478.402 388.233C476.379 390.775 473.841 392.924 470.448 389.113Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedSilhouette;
