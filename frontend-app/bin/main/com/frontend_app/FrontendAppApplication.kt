package com.frontend_app

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class FrontendAppApplication

fun main(args: Array<String>) {
	runApplication<FrontendAppApplication>(*args)
}
