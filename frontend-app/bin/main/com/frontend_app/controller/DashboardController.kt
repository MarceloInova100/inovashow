package com.frontend_app.controller

import com.frontend_app.dto.DashboardResponse
import com.frontend_app.service.DashboardService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/dashboard")
class DashboardController(
    private val dashboardService: DashboardService
) {

    @GetMapping
    fun getDashboard(): DashboardResponse? {
        return dashboardService.getDashboard()
    }
}