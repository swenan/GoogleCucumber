package com.nik.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.nik.base.BaseScenario;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags = { "@focus" }, plugin = { "pretty", "html:target/cucumber",
		"json:target/cucumber/cucumber.json" }, monochrome = true)
public class MyProjectTest {

	@AfterClass
	public static void tearDownClass() {
		// Close web driver
		BaseScenario.quitDriver();
	}
}
