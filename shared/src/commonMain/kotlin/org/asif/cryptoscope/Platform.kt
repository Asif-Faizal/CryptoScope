package org.asif.cryptoscope

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform