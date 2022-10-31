window.addEventListener('DOMContentLoaded', () => {
	const videoWrapperSelector = '[data-video]';
	const videoElementSelector = '[data-video-media]';
	const videoPosterSelector = '[data-video-poster]';

	const hidePoster = (props) => {
		props.posterEl.style.display = 'none';
	};

	const videoArr = document.querySelectorAll(videoWrapperSelector);

	if (videoArr && videoArr.length > 0) {
    videoArr.forEach((videoWrapper) => {
      const propsVideo = {
        wrapper: videoWrapper,
        mediaEl: videoWrapper.querySelector(videoElementSelector),
        posterEl: videoWrapper.querySelector(videoPosterSelector),
      };

      if (propsVideo.mediaEl && propsVideo.posterEl) {
				propsVideo.mediaEl.play();
				propsVideo.posterEl.style.opacity = 0;
        setTimeout(() => hidePoster(propsVideo), 1000);
      }
    });
  }

});