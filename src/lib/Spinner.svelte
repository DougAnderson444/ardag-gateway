<script>
</script>

<div
	class="fixed top-10 right-10 inline-flex items-center px-4 py-2
        font-semibold leading-6 text-sm shadow-md rounded-md
        text-white
        bg-green-500
        hover:bg-green-400
        transition ease-in-out duration-150 cursor-progress"
>
	<svg
		class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
		<path
			class="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		/>
	</svg>
	<slot />
</div>

<style>.fixed {
    position: fixed
}.top-10 {
    top: 2.5rem
}.right-10 {
    right: 2.5rem
}.-ml-1 {
    margin-left: -0.25rem
}.mr-3 {
    margin-right: 0.75rem
}.inline-flex {
    display: inline-flex
}.h-5 {
    height: 1.25rem
}.w-5 {
    width: 1.25rem
}.animate-spin {
    -webkit-animation: spin 1s linear infinite;
            animation: spin 1s linear infinite
}.cursor-progress {
    cursor: progress
}.items-center {
    align-items: center
}.rounded-md {
    border-radius: 0.375rem
}.bg-green-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(74 222 128 / var(--tw-bg-opacity))
}.bg-green-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(34 197 94 / var(--tw-bg-opacity))
}.px-4 {
    padding-left: 1rem;
    padding-right: 1rem
}.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem
}.font-semibold {
    font-weight: 600
}.leading-6 {
    line-height: 1.5rem
}.text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}.opacity-25 {
    opacity: 0.25
}.opacity-75 {
    opacity: 0.75
}.shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}.duration-150 {
    transition-duration: 150ms
}.ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}.hover\:scale-125:hover {
    --tw-scale-x: 1.25;
    --tw-scale-y: 1.25;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}.hover\:bg-green-400:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(74 222 128 / var(--tw-bg-opacity))
}</style>
