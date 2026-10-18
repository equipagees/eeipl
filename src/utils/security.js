/**
 * Security & Sanitization Utilities for Equipage Equipment Solutions (EES)
 * Defends against XSS, injection, spam bots, memory exhaustion, and malicious input vectors.
 */

/**
 * Strips dangerous HTML tags, attributes, control chars, and script injection payloads.
 * @param {string} input 
 * @returns {string} Sanitized string
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  return input
    // Remove null bytes and dangerous invisible control characters
    /* eslint-disable-next-line no-control-regex */
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Remove script tags and contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove inline event handlers (onclick, onload, onerror, onmouseover, etc.)
    .replace(/on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    // Remove dangerous pseudo-protocols (javascript:, data:, vbscript:)
    .replace(/(javascript|data|vbscript):[^\s"'<>]*/gi, '')
    // Strip HTML opening/closing tags
    .replace(/<\/?[^>]+(>|$)/g, '')
    // Trim whitespace
    .trim();
}

/**
 * Sanitizes URL parameters to prevent reflected XSS or payload injection via query strings.
 * @param {string} param 
 * @returns {string}
 */
export function sanitizeUrlParam(param) {
  if (typeof param !== 'string') return '';
  return encodeURIComponent(sanitizeInput(param));
}

/**
 * Validates that an external URL is secure and uses an allowed protocol.
 * @param {string} url 
 * @returns {boolean}
 */
export function isSafeExternalUrl(url) {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url, window.location.origin);
    return ['https:', 'http:', 'tel:', 'mailto:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Validates email with strict RFC compliant regex pattern.
 * @param {string} email 
 * @returns {boolean}
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim()) && email.length <= 120;
}

/**
 * Validates telephone number (supports Indian standard mobile/landlines and international formats).
 * @param {string} phone 
 * @returns {boolean}
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s().-]/g, '');
  // Matches 10 to 15 digits optionally prefixed with +
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(cleaned);
}

/**
 * In-memory client rate limiter with automatic stale key cleanup to prevent memory leaks.
 */
const rateLimitMap = new Map();

/**
 * Checks if an action is allowed within the cooldown period.
 * Automatically purges stale records older than 1 minute.
 * @param {string} key Unique key, e.g., 'quote_form'
 * @param {number} cooldownMs Milliseconds before next submission allowed (default: 5000ms)
 * @returns {boolean} True if allowed, false if rate limited
 */
export function checkRateLimit(key = 'general', cooldownMs = 5000) {
  const now = Date.now();
  
  // Garbage collection: clean entries older than 60 seconds
  if (rateLimitMap.size > 20) {
    for (const [k, time] of rateLimitMap.entries()) {
      if (now - time > 60000) {
        rateLimitMap.delete(k);
      }
    }
  }

  const lastTime = rateLimitMap.get(key) || 0;
  if (now - lastTime < cooldownMs) {
    return false; // Rate limited
  }
  rateLimitMap.set(key, now);
  return true;
}

/**
 * Checks if the honeypot field has been populated by an automated crawler/bot.
 * @param {string} honeypotValue 
 * @returns {boolean} True if likely a bot
 */
export function isBotSubmission(honeypotValue) {
  return typeof honeypotValue === 'string' && honeypotValue.trim().length > 0;
}

/**
 * Verifies submission timing. Headless automated bots typically submit forms under 1 second.
 * @param {number} formRenderTimestamp Timestamp in ms when the form was rendered
 * @param {number} minDurationMs Minimum time a human would take to fill the form (default 1500ms)
 * @returns {boolean} True if human-like duration
 */
export function isHumanSubmissionTiming(formRenderTimestamp, minDurationMs = 1500) {
  if (!formRenderTimestamp || typeof formRenderTimestamp !== 'number') return true;
  return Date.now() - formRenderTimestamp >= minDurationMs;
}

