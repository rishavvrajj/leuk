export function shareOnTwitter(text = 'Check out my dev portfolio powered by @leuk') {
  if (typeof window === 'undefined') return;
  const url = window.location.href;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank', 'width=500,height=400');
}
